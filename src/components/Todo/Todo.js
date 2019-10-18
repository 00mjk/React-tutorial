import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <input type="checkbox"/>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Todo;
