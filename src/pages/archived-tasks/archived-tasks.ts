import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TaskProvider } from '../../providers/task/task'

/**
 * Generated class for the ArchivedTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-tasks',
  templateUrl: 'archived-tasks.html',
})
export class ArchivedTasksPage {
  public archivedTasks = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private taskService: TaskProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivedTasksPage');
    this.archivedTasks = this.taskService.getArchivedTasks();
  }

}
