import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {
  private tasks = [];
  private archived = [];

  constructor(private http: Http) {
    console.log('Hello TaskProvider Provider');
  }

  getTasks() {
    return this.tasks;
  }

  getArchivedTasks() {
    return this.archived;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  archiveTask(index) {
    let archivedTask = this.tasks[index];
    this.tasks.splice(index, 1);
    this.archived.push(archivedTask);
  }

  modifyTask(index, newTask) {
    this.tasks[index] = newTask;
  }
}
