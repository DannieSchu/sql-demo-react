import React, { Component } from 'react';
import { getTypes, postBeer } from '../beer-api.js';

export default class CreateForm extends Component {
    state = {
        name: '',
        typeId: 1,
        image: '',
        brewery: '',
        alcoholic: true,
        ABV: 0,
        types: []
    }

    async componentDidMount() {
        const typeData = await getTypes();
        this.setState({types: typeData.body})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const newBeer = {
            name: this.state.name,
            typeId: Number(this.state.typeId),
            image: this.state.image,
            brewery: this.state.brewery,
            alcoholic: this.state.alcoholic,
            ABV: Number(this.state.ABV),
            urlImage: true
        }
        await postBeer(newBeer);
        this.props.history.push('/');
    }
    render() {
        const typeOptionNodes = this.state.types.map(type => <option value={type.id}>{type.type}</option>)

        return (
            <form>
                <label><span>Name: </span>
                    <input name="name" type='text' onChange={this.handleChange} required></input>
                </label>
                <label><span>Type: </span>
                    <select name="typeId" onChange={this.handleChange} required>
                        {typeOptionNodes}
                    </select>
                </label>
                <label><span>Image URL: </span>
                    <input name="image" type='url' onChange={this.handleChange} required></input>
                </label>
                <label><span>Brewery: </span>
                    <input name="brewery" type='text' onChange={this.handleChange} required></input>
                </label>
                <label><span>Alcoholic: </span>
                    <label>
                        <input name="alcoholic" type="radio" value="true" onChange={this.handleChange}/>True
                    </label>
                    <label>
                        <input name="alcoholic" type="radio" value="false" onChange={this.handleChange}/>False
                    </label>
                </label>
                <label><span>ABV: </span>
                    <input name="ABV" type='number' onChange={this.handleChange} step='0.1' required></input>
                </label>
                <button onClick={this.handleSubmit} >Submit</button>
                
            </form>
        )
    }
}
