import React from 'react';

export default class Button extends React.Component {
    clicked = (e) => {
        console.log('clicked')
    }

    render() {
        return (<div className={this.props.cn + " " + "button"}
        onClick={this.props.clicked}
            id={this.props.buttonname}>
            {this.props.buttonname}
        </div>)
    }
}