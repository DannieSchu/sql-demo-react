import React, { Component } from 'react'
import BeerItem from './BeerItem.js'
import { getOneBeer } from '../beer-api.js';

export default class Detail extends Component {
    
    state = { beer: {}}

    componentDidMount() {
         const data = getOneBeer();
         this.setState({beer: data.body})
    }

    render() {
        return (
            <BeerItem beer={this.state.beer} />
        )
    }
}
