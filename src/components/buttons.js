import React, {Component} from 'react';

class Buttons extends Component {

    render() {
        return (
            <div>
                <span>{this.props.label}</span>
                <span>{this.props.value}</span>
                <button onClick={this.props.minusClick.bind(this, this.props.label)}>MINUS</button>
                <button onClick={this.props.plusClick.bind(this, this.props.label)}>PLUS</button>
            </div>
        );
    }
}

export default Buttons
