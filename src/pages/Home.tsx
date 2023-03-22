import React, { useEffect, useState } from "react";
import { ITask } from "../types/ITask";

const Home: React.FC = () => {
    const options = { task: "Create a task", completed: false };
    const [todos, setTodos] = useState<Array<object>>([options]);
    const [todo, setTodo] = useState<string>("");

    useEffect(() => {
        const storedTodos = JSON.parse(
            localStorage.getItem("todos") as string
        ) as Array<object>;
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    /**
     * @description
     * Creates a new task, we mutate our existing todos state using spread operator
     * @param {string} newTask - New item to be added to our state
     */
    const addTask = (newTask: string) => {
        const options = { task: newTask, completed: false };
        setTodos([...todos, options]);
        setTodo("");
    };

    /**
     * @description
     * Deletes a task from our todos state
     * First is we create a new copy array of our todos, then we mutate that array using splice,
     * then setting the spliced array our new todos state
     * @param {number} index - Unique id of the task
     */
    const deleteTask = (index: number) => {
        const newTodoItems = [...todos];
        newTodoItems.splice(index, 1);
        setTodos(newTodoItems);
    };

    /**
     * @description
     * Updates a task from our todos state
     * @param {number} index - Unique id of the task
     */
    const updateTask = (index: number) => {
        const newTodoItems = [...todos];

        /**
         * Accessing our task from todos array through the index params,
         * item = {task: "Task here", completed: false}
         */
        let item = newTodoItems[index] as ITask;
        let promptValue = prompt("Enter updated task", item.task) as
            | string
            | null;
        let editedTask = { task: promptValue, completed: false };

        /**
         * Deleting the previous selected task, then inserting the new edited task
         */
        newTodoItems.splice(index, 1, editedTask);

        if (promptValue === "" || promptValue === null) {
            return;
        } else {
            item.task = promptValue;
            setTodos(newTodoItems);
        }
    };

    /**
     * @description
     * Set the marked task as completed
     * @param {number} index - Unique id of the task
     */
    const markAsComplete = (index: number) => {
        const newTodoItems = [...todos];

        /**
         * Lets check if the selected todo item is completed or !completed, basically this
         * is a toggler
         */
        let checkIfComplete = newTodoItems[index] as ITask;
        if (checkIfComplete.completed === false) {
            checkIfComplete.completed = true;
        } else {
            checkIfComplete.completed = false;
        }

        setTodos(newTodoItems);
    };

    return (
        <div className="home__container">
            <div className="home__box">
                <div className="home__header">
                    <h1>Todo List</h1>
                </div>
                <div className="home__input">
                    <input
                        type="text"
                        placeholder="Add Task..."
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        className="add--button"
                        onClick={() => addTask(todo)}
                    >
                        Add Item
                    </button>
                </div>
                <div className="home__body">
                    {todos &&
                        todos.map((item: ITask, idx: number) => (
                            <div className="home__list" key={idx}>
                                <div className="home__todo">
                                    <input
                                        type="checkbox"
                                        onClick={() => markAsComplete(idx)}
                                    />
                                    <h3
                                        style={
                                            item.completed
                                                ? {
                                                      textDecoration:
                                                          "line-through",
                                                  }
                                                : null
                                        }
                                    >
                                        {item.task}
                                    </h3>
                                </div>
                                <div className="home__actions">
                                    <button
                                        className="edit--button"
                                        onClick={() => updateTask(idx)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete--button"
                                        onClick={() => deleteTask(idx)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
