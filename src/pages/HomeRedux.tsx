import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../types/ITask";

import { useDispatch, useSelector } from "react-redux";
import {
    addTask,
    deleteTask,
    updateTask,
    markAsCompleteTask,
} from "../features/TaskSlice";

const HomeRedux: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [newTodo] = useState<string>("");

    const dispatch = useDispatch();
    const todoList = useSelector(
        (state: ITask) => state.tasks
    ) as Array<object>;

    /**
     * @description
     * Creates a new task
     */
    const handleAddTask = () => {
        const newValue = {
            task: todo,
            completed: false,
            id: uuidv4(),
        };
        dispatch(addTask(newValue));
        setTodo("");
    };

    /**
     * @description
     * Deletes a selected task
     * @param {number} id - Unique id of the task
     */
    const handleDeleteTask = (id: number) => {
        dispatch(deleteTask({ id }));
    };

    /**
     * @description
     * Updates a selected task
     * @param {number} id - Unique id of the task
     */
    const handleUpdateTask = (id: number) => {
        let promptValue = prompt("Enter updated task", newTodo) as
            | string
            | null;
        dispatch(updateTask({ task: promptValue, completed: false, id }));
    };

    /**
     * @description
     * Updates a selected task from !complete to complete
     * @param {number} id - Unique id of the task
     * @param {boolean} isCompleted - Checks whether the todo is completed or !completed
     */
    const handleMarkAsComplete = (id: number, isCompleted: boolean) => {
        dispatch(
            markAsCompleteTask({ completed: isCompleted ? false : true, id })
        );
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
                    <button className="add--button" onClick={handleAddTask}>
                        Add Item
                    </button>
                </div>
                <div className="home__body">
                    {todoList &&
                        todoList.map((item: ITask, idx: number) => (
                            <div className="home__list" key={idx}>
                                <div className="home__todo">
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            handleMarkAsComplete(
                                                item.id,
                                                item.completed
                                            )
                                        }
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
                                        onClick={() =>
                                            handleUpdateTask(item.id)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete--button"
                                        onClick={() =>
                                            handleDeleteTask(item.id)
                                        }
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

export default HomeRedux;
