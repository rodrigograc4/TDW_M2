import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import SearchTask from "../components/SearchTask";
import TaskList from "../components/TaskList";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-gradient-to-r from-purple-200 to-pink-200 shadow-2xl rounded-lg">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
                To-Do List
            </h1>
            <div className="flex space-x-10 mb-4">
                <AddTask addTask={addTask} />
                <SearchTask search={search} setSearch={setSearch} />
            </div>
            <TaskList
                tasks={filteredTasks}
                removeTask={removeTask}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </div>
    );
}

export default ToDoList;
