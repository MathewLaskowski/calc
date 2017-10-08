import React, {Component} from 'react';
import {connect} from 'react-redux';

class Display extends Component {


    render() {
        return(
            <div style={{border: "1px solid red"}}>
                <p style={{color: "red"}}>Display Component</p>
                <div>
                    <h1>Dorośli</h1>
                    <p>{this.props.adults}</p>
                </div>
                <div>
                    <h1>Dzieci</h1>
                    <p>{this.props.childs}</p>
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


export default connect(mapStateToProps)(Display)