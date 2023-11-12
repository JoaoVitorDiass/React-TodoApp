import React from "react";
import Navbar from "./Navbar";
import TodoList from "./Todolist";
import TodoContext from "../contexts/TodoContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodo from "./AddTodo";

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Routes>
                        
                        <Route path="/create" element={<AddTodo/>}>
                        </Route>

                        <Route path="/" element={ <TodoList></TodoList> }>
                        </Route>

                    </Routes>
                </div>
            </Router>
        </TodoContext>
    )
}

export default App;