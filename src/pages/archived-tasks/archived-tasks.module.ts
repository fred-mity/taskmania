import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedTasksPage } from './archived-tasks';

@NgModule({
  declarations: [
    ArchivedTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedTasksPage),
  ],
})
export class ArchivedTasksPageModule {}
