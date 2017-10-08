import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Buttons from '../components/buttons';

class App extends Component {

    minusClick(what) {
        this.props.minusCounter(what);
    }

    plusClick(what) {
        this.props.plusCounter(what);
    }

    render() {
        return (
            <div style={{border: "1px solid blue"}}>
                <p style={{color: "blue"}}>App Component</p>
                <Buttons
                    value = {this.props.childs}
                    label = 'kids'
                    minusClick = {this.minusClick.bind(this)}
                    plusClick = {this.plusClick.bind(this)}
                />
                <div>
                    <span>Dorośli</span>
                    <span>{this.props.adults}</span>
                    <button onClick={this.minusClick.bind(this, 'adults')}>MINUS</button>
                    <button onClick={this.plusClick.bind(this, 'adults')}>PLUS</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        childs: state.counter.childs,
        adults: state.counter.adults
    }
}


export default connect(mapStateToProps, actions)(App)