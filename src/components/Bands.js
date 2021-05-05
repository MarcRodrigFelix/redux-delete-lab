import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
    render() {
        const bands = this.props.bands.map( band => <Band  {...band} key={band.id} delete={this.props.delete}/> )

        return (
            <div>
                {bands}
            </div>
        )
    }
}
