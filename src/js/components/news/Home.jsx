import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        const language = this.props.language
        return (
            <div className="subPage">
                <div className="subpage subpage--title">
                    <div className="subpage subpage--title">
                        <div className="title--text">{ this.props.translate['news'][language] }</div>
                    </div>
                </div>
            </div>
        )
    }
}, require('css/sponsor/Home.styl'))
