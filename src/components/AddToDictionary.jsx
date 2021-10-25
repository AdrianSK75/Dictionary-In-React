import React, {Component} from "react";

class AddToDictionary extends Component {
        render() {
            return (
                <form onSubmit={this.props.handleSubmit.bind(this)}>
                        <input type="text" onChange = {this.props.handleChange.bind(this)} value={this.props.text} />
                        <button type="submit"> Add to Dictionary </button>
                </form>
            );
        }
}

export default AddToDictionary;