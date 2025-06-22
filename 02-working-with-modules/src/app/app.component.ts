import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
    //console.log((4+5+6+7+4+4+5+5+5+7+11+2+3+7+7+3+6+8+5+3+6+9)/60)
  }
}
