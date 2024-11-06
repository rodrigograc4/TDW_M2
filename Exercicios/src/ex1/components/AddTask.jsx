import React, { useState } from "react";

function AddTask({ addTask }) {
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task);
            setTask("");
        }
    };

    return (
        <div className="flex w-full">
            <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Add a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition duration-200 ease-in-out"
                onClick={handleAddTask}
            >
                Add
            </button>
        </div>
    );
}

export default AddTask;
