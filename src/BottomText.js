import React, { Component } from 'react';

class BottomText extends Component {
    render() {
        return (
            <div className="ListItem">
                <p>You can select {this.props.amount} ingredients</p>
            </div>
        );
    }
}

export default BottomText;