import React, { createContext } from 'react'
import { TodoContextType } from './TodoContextType'
import { Todo } from '../models/Todo'

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo> () =>      {}
})