export class TaskModel {
    id: string = '';
    title: string = '';
    content: string = '';
    isComplited: boolean = false;

    constructor(id: string, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
