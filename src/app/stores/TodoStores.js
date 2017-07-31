//dependencies
import { EventEmitter } from 'events';

//modules
import dispatcher from '../dispatcher';

class TodoStores extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1,
                text: 'build a react app',
                complete: false
            },
            {
                id: 2,
                text: 'build a pwa with react',
                complete: false
            },
        ];
    }

    getAll() {
        return this.todos;
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit('change');
    }

    handleActions(action) {
        console.log('Test dispatcher : ', action);
        switch (action.type) {
            case 'CREATE_TODO': {
                this.createTodo(action.text);
            }
        }
    }
}

const todoStores = new TodoStores;
dispatcher.register(todoStores.handleActions.bind(todoStores));

export default todoStores;