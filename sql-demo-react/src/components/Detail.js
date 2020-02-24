import React, { Component } from 'react'
import BeerItem from './BeerItem.js'
import { getOneBeer } from '../beer-api.js';

export default class Detail extends Component {
    
    state = { beer: {} }

    async componentDidMount() {
        console.log(`------------param:`, this.props.match.params.beer);
        const data = await getOneBeer(this.props.match.params.beer);
        this.setState({ beer: data.body[0] })
    }
    
    render() {
        return (
            <ul>
                <BeerItem beer={this.state.beer} key={`single_${this.state.beer.name}`} />
            </ul>
        )
    }
}
