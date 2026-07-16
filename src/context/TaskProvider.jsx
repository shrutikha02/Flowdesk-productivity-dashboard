import { useEffect, useState } from "react";
import { tasks as initialTasks } from "../data/tasks";
import { TaskContext } from "./TaskContext";
import toast from "react-hot-toast";
const TaskProvider = ({ children }) => {
  // Load tasks from localStorage on first render
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("flowdesk-tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : initialTasks;
  });
  

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem(
      "flowdesk-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (task) => {
  setTasks((prev) => [...prev, task]);
  toast.success("Task created successfully");
};

const deleteTask = (id) => {
  setTasks((prev) =>
    prev.filter((task) => task.id !== id)
  );

  toast.success("Task deleted successfully");
};

 const updateTask = (updatedTask) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );

  toast.success("Task updated successfully");
  };

  const moveTask = (taskId, newStatus, overTaskId) => {
    setTasks((prevTasks) => {
      const activeTask = prevTasks.find((task) => task.id === taskId);

      if (!activeTask) return prevTasks;

    const remainingTasks = prevTasks.filter(
      (task) => task.id !== taskId
    ); 
    const updatedTask = {
      ...activeTask,
      status: newStatus,
    };

     if (!overTaskId) {
      return [...remainingTasks, updatedTask];
    }

    // Find the task we're hovering over
    const overIndex = remainingTasks.findIndex(
      (task) => task.id === overTaskId
    );

    if (overIndex === -1) {
      return [...remainingTasks, updatedTask];
    }

    
    const nextTasks = [...remainingTasks];
    nextTasks.splice(overIndex, 0, updatedTask);

    return nextTasks;
  });

 };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        moveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;