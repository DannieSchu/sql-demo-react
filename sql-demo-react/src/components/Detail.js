import React, { Component } from 'react'
import BeerItem from './BeerItem.js'
import { getOneBeer } from '../beer-api.js';

export default class Detail extends Component {
    
    state = { beer: [] }

    async componentDidMount() {

        const data = await getOneBeer(this.props.match.params.beer);
        this.setState({ beer: data.body })
    }
    
    render() {
        const beerNode = this.state.beer.map(beer => <BeerItem beer={beer} key={`single_${beer.name}`} />)
        return (
            <ul>
                {beerNode}
            </ul>
        )
    }
}
