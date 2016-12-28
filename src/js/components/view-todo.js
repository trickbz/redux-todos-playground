import React from 'react';
import {Link} from 'react-router';

export default class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{this.props.id}</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>{this.props.title}</td>
                        </tr>
                        <tr>
                            <td>Completed</td>
                            <td>{this.props.completed ? 'completed': 'not completed'}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/app/todos">Back</Link>
            </div>
        )
    }
}