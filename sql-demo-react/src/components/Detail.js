import React, { Component } from 'react'
import BeerItem from './BeerItem.js'
import { getOneBeer } from '../beer-api.js';

export default class Detail extends Component {
    
    state = { beer: {} }

    async componentDidMount() {
         const data = await getOneBeer(this.props.match.params.beer);
         this.setState({ beer: data.body.results[0] })
        }
        
        render() {
            console.log(`this.props.match.params.beer`, this.props.match.params.beer)
        return (
            <div>
                <BeerItem beer={this.state.beer} />
            </div>
        )
    }
}
