import React from "react";
import Navbar from "./Navbar";
import TodoList from "./Todolist";
import TodoContext from "../contexts/TodoContext";

const App = () => {
    return (
        <div>
            <TodoContext>
                <div className="uk-container">
                    <Navbar></Navbar>
                    <TodoList></TodoList>
                </div>
            </TodoContext>

            
        </div>
    )
}

export default App;