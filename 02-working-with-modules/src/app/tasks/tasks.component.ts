import { Component, Input } from "@angular/core";
import {type  NewTaskData } from "./task/tasks.model";
import { TasksService } from "./tasks.service";

@Component({
    selector: 'app-tasks',
    standalone: false,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})

export class TasksComponent {
    @Input({required: true}) userId!: string;
    @Input({required: true}) name?: string;
    isAddingTask = false;
    // private tasksService: TasksService;

    constructor(private tasksService: TasksService) {
        // this.tasksService = tasksService
    }

    get selectedUserTasks(){
        return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id:string) {
        
    }

    onStartAddTask(){
        this.isAddingTask = true;
    }

    onCloseAddTask(){
        this.isAddingTask = false;
    }
}
