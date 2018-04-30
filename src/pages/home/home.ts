import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TaskProvider } from '../../providers/task/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tasks = [];

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private taskService: TaskProvider) {
      this.tasks = this.taskService.getTasks();
  }

  openTaskAlert() {
    let addTaskAlert = this.alertCtrl.create({
      title: "Add new task",
      message: "Enter your new task",
      inputs: [
        {
          type: "text",
          name: "addTaskInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Task",
          handler: (inputData) => {
            let taskText = inputData.addTaskInput;
            this.taskService.addTask(taskText);
          }
        }
      ]
    });
    addTaskAlert.present();
  }
}
