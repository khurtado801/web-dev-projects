import React, { Component } from 'react'

import Modules from '../../pages/Modules/Modules.js';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: "",
                operation: "",
                manufacturer: "",
                size: "",
                powerConsumption: ""
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                title: "",
                operation: "",
                manufacturer: "",
                size: "",
                powerConsumption: ""
            },
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {add, id} = this.props;
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        } else {
            this.props.submit(this.state.inputs, id);
        }
    }

    render () {
        // Deconstruct this.state.inputs
        let {title, operation, manufacturer, size, powerConsumption} = this.state.inputs;
        return (
            <div>
                <form aclassName="form-wrapper" onSubmit={this.handleSubmit}>
                <h1>Submit a module...</h1>
                <label>Title: </label>
                    <input onChange={this.handleChange} className="title" value={title} name="title" type="text" placeholder="Title" />
                <label>Operation: </label>
                    <input onChange={this.handleChange} className="operation" value={operation} name="operation" type="text" placeholder="Operation" />
                <label>Manufacturer: </label>
                    <input onChange={this.handleChange} className="manufacturer" value={manufacturer} name="manufacturer" type="text" placeholder="Manufacturer" />
                <label>Size: </label>
                    <input onChange={this.handleChange} className="size" value={size} name="size" type="text" placeholder="Size" />
                <label>Power Consumption: </label>
                    <input onChange={this.handleChange} className="powerConsumption" value={powerConsumption} name="powerConsumption" type="text" placeholder="Power Consumption" />
                <button className="submit" type="submit" >Submit</button>
                </form>
            </div>
        );
    }
}

export default Form