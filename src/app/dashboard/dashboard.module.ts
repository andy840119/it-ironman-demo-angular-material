import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { AddPostDialogComponent } from './blog/add-post-dialog/add-post-dialog.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule, SharedMaterialModule],
  declarations: [DashboardComponent, MainComponent, SurveyComponent, BlogComponent, AddPostDialogComponent],
  exports: [DashboardComponent],
  entryComponents: [AddPostDialogComponent]
})
export class DashboardModule {}
