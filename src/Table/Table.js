import React, { Component } from 'react';

import './Table.css';

class Table extends Component {
    state = {
        unit00: {value: ''},
        unit01: {value: ''},
        unit02: {value: ''},
        unit10: {value: ''},
        unit11: {value: ''},
        unit12: {value: ''},
        unit20: {value: ''},
        unit21: {value: ''},
        unit22: {value: ''},
        counter: 0,
    }

    UnitClickHandler = (clickedunit) => {
        var counter = this.state.counter;
        this.setState({counter: counter + 1})
        
        if (counter % 2 === 0) {
            this.setState({[clickedunit]: {value: <span id="x" style={{color: 'red', fontWeight: 'bold'}}>X</span>}})
        }
        else {
            this.setState({[clickedunit]: {value: <span id="o" style={{color: 'blue', fontWeight: 'bold'}}>O</span>}})
        };
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td onClick = {() => this.UnitClickHandler('unit00')}>
                        {this.state.unit00.value}</td>
                    <td onClick = {() => this.UnitClickHandler('unit01')} style={{borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>
                        {this.state.unit01.value}</td>
                    <td onClick = {() => this.UnitClickHandler('unit02')}>
                        {this.state.unit02.value}</td>
                </tr>
                <tr>
                    <td onClick = {() => this.UnitClickHandler('unit10')} style={{borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>
                        {this.state.unit10.value}</td>
                    <td onClick = {() => this.UnitClickHandler('unit11')} style={{border: '1px solid #ddd'}}>
                        {this.state.unit11.value}</td>
                    <td onClick = {() => this.UnitClickHandler('unit12')} style={{borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd'}}>
                        {this.state.unit12.value}</td>
                </tr>
                <tr>
                    <td onClick = {() => this.UnitClickHandler('unit20')}>
                        {this.state.unit20.value}</td>
                    <td onClick = {() => this.UnitClickHandler('unit21')} style={{borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>
                        {this.state.unit21.value}</td>
                    <td onClick = {() => this.UnitClickHandler('unit22')}>
                        {this.state.unit22.value}</td>
                </tr>
                </tbody>
            </table>
        )
    };
};

export default Table;