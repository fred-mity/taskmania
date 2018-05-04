import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';

import { TaskProvider } from '../../providers/task/task'
//import { ArchivedTasksPage } from '../archived-tasks/archived-tasks'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tasks = [];
  public reorderIsEnabled = false;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    private taskService: TaskProvider,
    private toastCtrl: ToastController
  ) {
      this.tasks = this.taskService.getTasks();
  }

  openNewTaskAlert() {
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

            addTaskAlert.onDidDismiss(()=> {
              let addTaskToast = this.toastCtrl.create({
                message: "Task added !",
                duration: 2000
              })
  
              addTaskToast.present();
            })
          }
        }
      ]
    });
    addTaskAlert.present();
  }

  openModifyTaskAlert(index) {
    let modifyTaskAlert = this.alertCtrl.create({
      title: "Modify a task",
      message: "Modify your task",
      inputs: [
        {
          type: "text",
          name: "modifyTaskInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Modify Task",
          handler: (inputData) => {
            let taskText = inputData.modifyTaskInput;
            this.taskService.modifyTask(index, taskText);

            modifyTaskAlert.onDidDismiss(()=> {
              let modifyTaskToast = this.toastCtrl.create({
                message: "Task modified !",
                duration: 2000
              })
  
              modifyTaskToast.present();
            })
          }
        }
      ]
    });
    modifyTaskAlert.present();
  }

  archiveTask(index) {
    this.taskService.archiveTask(index);
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }
  
  itemReordered($event) {
    reorderArray(this.tasks, $event);
  }

  goToArchivePage() {
    this.navCtrl.push('ArchivedTasksPage');
  }
}
