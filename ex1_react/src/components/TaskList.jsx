import React from "react";

function TaskList({ tasks, removeTask, toggleTaskCompletion }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className={`flex justify-between items-center p-3 mb-2 bg-white shadow rounded-lg ${task.completed ? "line-through text-gray-400" : "text-gray-800"
                        }`}
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)}
                            className="mr-2"
                        />
                        <span>{task.text}</span>
                    </div>
                    <button
                        className="text-red-500 hover:text-red-700 transition duration-200"
                        onClick={() => removeTask(index)}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
