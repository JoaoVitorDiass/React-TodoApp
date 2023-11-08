import React from "react";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {

    const todos: Todo[] = [

        { id: 1, title: 'Aprender React', done: true },
        { id: 2, title: 'Aprender Typescript', done: false },
        { id: 3, title: 'Arrumar um bom emprego', done: false },
        
    ];

    return (
        <div className="uk-container">
            <table className="uk-table">
                <caption>Lista de tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map( 
                        todo => (
                            <TodoListItem key={todo.id} todo={todo} ></TodoListItem>
                        )  
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList