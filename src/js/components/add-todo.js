import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onInputChanged(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div className="add-todo-container">
                <input placeholder="Todo Title..." onChange={this.onInputChanged.bind(this)} value={this.state.text} />
                <button onClick={() => {
                    const text = this.state.text.trim();
                    if (text) {
                        this.props.onAddTodo(text);
                        this.setState({
                            text: ''
                        })
                    }
                }}>Add Todo</button>
            </div>
        );
    }
}