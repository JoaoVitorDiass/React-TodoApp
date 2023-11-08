import React from "react";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {

    const todos: Todo[] = [];

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