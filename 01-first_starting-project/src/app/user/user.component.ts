import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {
  //To change state, we simply change the data we output in the Markup
  /*
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
    */
  
  //Signals

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string; 
  // @Input({required:true}) name!: string;

  @Output() select = new EventEmitter();
  // select = output<string>();

  //read-only
  // avatar = input.required<string>();
  // name=input.required<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
