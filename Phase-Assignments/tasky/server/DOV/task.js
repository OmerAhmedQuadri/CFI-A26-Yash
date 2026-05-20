import mongoose from "mongoose";
import Task from "../models/Task";

export  const createTask = async (data) => {
    try {
        const task = Task.create(data)
        return task
    } catch (error) {
        console.log(error);
    }
}