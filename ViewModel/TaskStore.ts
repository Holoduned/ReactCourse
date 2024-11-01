import { makeAutoObservable} from 'mobx';
import TaskService from '../Service/TaskService.ts';
import {TaskModel} from '../Entity/TaskModel.ts';

export class TaskStore {
    taskService;
    tasks: TaskModel[] = [];

    constructor() {
        makeAutoObservable(this);
        this.taskService = new TaskService();

        this.tasks = this.taskService.getAndPrepareDataForStore();
    }

    addTask = (task: TaskModel) => {
        this.taskService.addTask(task);
        this.tasks = this.taskService.getAndPrepareDataForStore();
        //console.log(this.tasks);
    };

    deleteTask = (id: string) => {
        this.taskService.deleteTask(id);
        this.tasks = this.taskService.getAndPrepareDataForStore();
        //console.log(this.tasks);
    };

    taskCompletion = (id: string) => {
        this.taskService.taskCompletion(id);
        this.tasks = this.taskService.getAndPrepareDataForStore();
        //console.log(this.tasks);
    };
}
