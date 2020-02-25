import React, { Component } from 'react'
import { deleteOneBeer } from '../beer-api.js';

export default class BeerItem extends Component {

    handleDelete = async () => {
        await deleteOneBeer(this.props.beer.beer_id);
        window.location = '/';
    }

    render() {
        const { beer } = this.props;
        const currentImage = (beer.url_image) ? beer.image : `/assets/${beer.image}`

        const color = (beer.alcoholic) ? { borderColor: '#804040' } : { borderColor: '#00ffff' }
        return (
            <li className="beer-container" style={color}>
                <h2>{beer.name}</h2>
                <p><em>{beer.brewery}</em></p>
                <img src={currentImage} alt={beer.name} />
                <div>
                    <span>{beer.type}</span>
                    <span>{`${beer.abv.toFixed(1)}%`}</span>
                </div>
                <button onClick={this.handleDelete}>Delete</button>

            </li>
        )
    }
}

