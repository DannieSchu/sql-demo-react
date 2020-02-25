import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="/create">Create New</Link>
                <Link to="/">Beers!</Link>
            </div>
        )
    }
}
