import React, { Component } from 'react';
import { getBeers } from '../beer-api.js';

// Import components
import BeerItem from '../BeerItem.js';

export default class Home extends Component {
    state = {
        beers: []
    }

    async componentDidMount() {
        const data = await getBeers();
        this.setState( { beers: data.body })
    }

    render() {

        const beerNodes = this.state.beers.map(beer => 
            <BeerItem beer={beer} key={beer.name} />
        )
        return (
            <ul>
                {beerNodes}
            </ul>
        )
    }
}
