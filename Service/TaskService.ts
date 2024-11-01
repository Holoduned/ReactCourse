import TaskRepository from '../Repository/TaskRepository.ts';
import {TaskModel} from '../Entity/TaskModel.ts';

export default class TaskService {
    taskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.taskRepository.getData();

        return data;
    };

    addTask(task: TaskModel) {
        this.taskRepository.addTask(task);
    }

    deleteTask(id: string) {
        this.taskRepository.deleteTask(id);
    }

    taskCompletion(id: string) {
        this.taskRepository.taskCompletion(id);
    }
}
