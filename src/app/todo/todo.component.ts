import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos = [
    { name: 'Get to Swimming', checked: false, id: 'inlineCheckbox1' },
    { name: 'Go for Breakfast',id: 'inlineCheckbox2', checked: false },
    { name: 'Office Calls',id: 'inlineCheckbox3', checked: false },
    { name: 'Workout & Gym',id: 'inlineCheckbox4', checked: false },
    { name: 'Scheduled Dinner',id: 'inlineCheckbox5', checked: false },
  ];

  get selectedOptions() {
    return this.todos.filter(opt => opt.checked);
  }
}