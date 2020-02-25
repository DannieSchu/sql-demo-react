import React, { Component } from 'react'

export default class BeerItem extends Component {
    
    render() {
        const { beer } = this.props;
        const color = (beer.alchoholic) ? { borderColor: '#804040' } : { borderColor: '#00ffff' } 
        return (
            <li className="beer-container" style={color}>
                <h2>{beer.name}</h2>
                <p><em>{beer.brewery}</em></p>
                <img src={`/assets/${beer.image}`} alt={beer.name} />
                <div>
                    <span>{beer.type_id}</span>
                    <span>{`${beer.abv.toFixed(1)}%`}</span>
                </div>

            </li>
        )
    }
}

