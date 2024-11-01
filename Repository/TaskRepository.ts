import {TaskModel} from '../Entity/TaskModel.ts';

export default class TaskRepository {

    data = [
        new TaskModel('1', 'Task1', 'qqqq'),
    ];

    getData = () => {
        return this.data;
    };
    addTask = (task: TaskModel) => {
        this.data.push(task);
    };
    deleteTask = (id: string) => {
        this.data = this.data.filter((task) => task.id !== id);
    };

    taskCompletion = (id: string) => {
        this.data = this.data.map(task =>
          task.id === id ? { ...task, isComplited: !task.isComplited } : task
        );
        console.log(this.data);
    };
}
