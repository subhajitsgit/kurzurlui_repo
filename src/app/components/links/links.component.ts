import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientsActivityComponent } from '../dashboard/project/clients-activity/clients-activity.component';
import { OnlineCourseTimelineComponent } from '../dashboard/project/online-course-timeline/online-course-timeline.component';
import { ProjectsOverviewComponent } from '../dashboard/project/projects-overview/projects-overview.component';
import { RecentProjectsComponent } from '../dashboard/project/recent-projects/recent-projects.component';
import { ProjectStatusComponent } from '../dashboard/project/project-status/project-status.component';
import { RunningEventsComponent } from '../dashboard/project/running-events/running-events.component';
import { TodaysTasksComponent } from '../dashboard/project/todays-tasks/todays-tasks.component';
import { TotalProjectComponent } from '../dashboard/project/total-project/total-project.component';
import { UserProfileComponent } from '../users/user-profile/user-profile.component';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { Subject, takeUntil } from 'rxjs';
import { UserLink } from './link.model';
import { UserLinksService } from './links.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-links',
  standalone: true,
  imports: [ClientsActivityComponent, OnlineCourseTimelineComponent,
    ProjectStatusComponent, ProjectsOverviewComponent, RecentProjectsComponent,
    RunningEventsComponent, TodaysTasksComponent, TotalProjectComponent, UserProfileComponent,
    FeatherIconsComponent, DatePipe, ReactiveFormsModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
  providers:[UserLinksService]
})
export class LinksComponent  implements  OnInit, OnDestroy {


  userLinks : UserLink[] = [];
  linkForm: FormGroup;
  userId: number;
  private destroy$ = new Subject<any>();
  private readonly DOMAIN_DEFAULT_VALUE: string;

  constructor(
    private userLinksService: UserLinksService,
    private _formBuilder: FormBuilder
  ){
    this.userId = 1;
    this.DOMAIN_DEFAULT_VALUE = '1';

    this.linkForm = this._formBuilder.group({
      mainUrl: ['', [Validators.required]],
      domain: [this.DOMAIN_DEFAULT_VALUE, [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.userLinksService.getUserlinks()
    .pipe(takeUntil(this.destroy$))
    .subscribe(links=>this.userLinks = links);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete()
  }

  onSave() {
    if (this.linkForm.invalid) {
      this.linkForm.markAllAsTouched();
      console.warn('Invalid form');
      return;
    }
      const formValues = this.linkForm.value;
      this.userLinksService.createLink({
        userId: 3,
        mainUrl: formValues.mainUrl,
        title: formValues.title
      })
      .subscribe(resp => {
        console.log({resp})

        this.linkForm.reset({
          domain: this.DOMAIN_DEFAULT_VALUE
        });

        this.userLinksService.getUserlinks()
          .pipe(takeUntil(this.destroy$))
          .subscribe(links => this.userLinks = links);
      });
  }

  onClear() {
    this.linkForm.reset();
  }
}
