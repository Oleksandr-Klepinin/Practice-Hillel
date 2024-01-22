import { useState, useEffect } from "react";
import { ThemeContext } from "../helpers/context.js";
import { useContext } from "react";

function TodoList() {
    const [color] = useContext(ThemeContext);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleCheckboxChange = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    return (
        <main style={{ background: color.colorBg, color: color.colorFont}} className="container mx-auto mt-8 p-4 px-20">
            <h1 className="text-3xl font-bold mb-4" style={{ color: color.colorFont }}>
                TodoList
            </h1>
            <div className="flex space-x-2 mb-4">
                <input style={{ background: color.colorBg, color: color.colorFont}}
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter a new task"
                    className="border p-2 mr-2 flex-grow"
                />
                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCheckboxChange(index)}
                            className="mr-2"
                        />
                        <span
                            className={`flex-grow ${task.completed && "line-through"}`}
                            style={{ color: color.colorFont }}
                        >
              {task.text}
            </span>
                        <button
                            onClick={() => handleDeleteTask(index)}
                            className="bg-red-500 text-white p-2 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default TodoList;