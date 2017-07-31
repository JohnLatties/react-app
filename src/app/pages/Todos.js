//dependencies
import React, { Component } from 'react';

//modules
import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStores from '../stores/TodoStores';

class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStores.getAll()
        }
    }

    componentWillMount() {
        TodoStores.on('change', () => {
            this.setState({
                todos: TodoStores.getAll()
            });
        });
    }

    createTodo(){
        TodoActions.createTodo(Date.now());
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });

        return (
            <div>
                <button onClick={this.createTodo.bind(this)}>Create!</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}

export default Todos;