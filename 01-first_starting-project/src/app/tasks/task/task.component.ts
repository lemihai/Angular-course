import { Component, Input, inject } from '@angular/core';
import { type Task } from './tasks.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required: true}) task!: Task;

  private tasksService = inject(TasksService);


  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }
}
