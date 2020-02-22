import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getBeers } from '../beer-api.js';

// Import components
import BeerItem from './BeerItem.js';


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
            <Link to={`/beers/${beer.id}`}>
                <BeerItem beer={beer} key={beer.name} />
            </Link>
        )
        return (
            <ul className="list">
                {beerNodes}
            </ul>
        )
    }
}
