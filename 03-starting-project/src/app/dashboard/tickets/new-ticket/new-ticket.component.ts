import { AfterViewInit, Component, ElementRef, output, viewChild, ViewChild, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; 
  // @ViewChildren(ButtonComponent) buttons
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('forms');
  // @Output() add = new EventEmitter({title: string; text: string})
  enteredTitle=''
  enteredText=''
  add = output<{title: string; text: string}>();

  ngOnInit() {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }
  
  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string){
    this.add.emit({title: this.enteredTitle, text: this.enteredText })
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
