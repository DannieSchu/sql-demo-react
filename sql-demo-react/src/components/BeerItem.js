import React, { Component } from 'react'
import { getTypes } from '../beer-api.js';
export default class BeerItem extends Component {
    state = { types: [] }
    async componentDidMount() {
        const typeData = await getTypes();
        this.setState({types: typeData.body})
    }
    render() {
        const { beer } = this.props;
        let typeString;
        this.state.types.forEach(type => {
            if (type.id === beer.type_id) typeString = type.type;
        })
        const currentImage = (beer.url_image) ? beer.image : `/assets/${beer.image}`

        const color = (beer.alcoholic) ? { borderColor: '#804040' } : { borderColor: '#00ffff' } 
        return (
            <li className="beer-container" style={color}>
                <h2>{beer.name}</h2>
                <p><em>{beer.brewery}</em></p>
                <img src={currentImage} alt={beer.name} />
                <div>
                    <span>{typeString}</span>
                    <span>{`${beer.abv.toFixed(1)}%`}</span>
                </div>

            </li>
        )
    }
}

