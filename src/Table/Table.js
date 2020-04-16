import React, { Component, Fragment } from 'react';

import './Table.css';

class Table extends Component {
    state = {
        unit00: {value: '', id: 'unchanged'},
        unit01: {value: '', id: 'unchanged'},
        unit02: {value: '', id: 'unchanged'},
        unit10: {value: '', id: 'unchanged'},
        unit11: {value: '', id: 'unchanged'},
        unit12: {value: '', id: 'unchanged'},
        unit20: {value: '', id: 'unchanged'},
        unit21: {value: '', id: 'unchanged'},
        unit22: {value: '', id: 'unchanged'},
        counter: 0,
        wincondition: '',
        stopper: false,
    }

    WinnerChecker = () => {
        if(this.state.unit00.id === 'x' && this.state.unit01.id === 'x' && this.state.unit02.id === 'x') {
            this.setState({wincondition: 'X Won!', stopper: true})
            return 'Winner'
        }
        return 'NoWinner'
    }

    UnitClickHandler = (clickedunit) => {

        if (this.state.stopper === false) {
            if (this.state[clickedunit].id === 'unchanged') {
                var counter = this.state.counter;
                this.setState({counter: counter + 1})
    
                if (counter % 2 === 0) {
                    this.setState({[clickedunit]: {value: <span id="x" style={{color: 'red', fontWeight: 'bold'}}>X</span>, id: 'x'}})
                }
                else {
                    this.setState({[clickedunit]: {value: <span id="o" style={{color: 'blue', fontWeight: 'bold'}}>O</span>, id: 'o'}})
                };
            }
        }
        this.WinnerChecker();
        
    }

    render() {
        return (
            <Fragment>
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
                <h1>{this.state.wincondition}</h1>
            </Fragment>
        )
    };
};

export default Table;