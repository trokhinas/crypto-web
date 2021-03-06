import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDividerModule, MatInputModule, MatSelectModule, MatTableModule, MatTooltipModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';


import {LoginComponent} from './components/auth/login/login.component';
import {MainComponent} from './components/main/main/main.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CoursesMainComponent} from './components/courses/courses-main/courses-main.component';
import {LectureLinkComponent} from './components/courses/lecture/lecture-link/lecture-link.component';
import {LectureListComponent} from './components/courses/lecture/lecture-list/lecture-list.component';
import {AlgsMainComponent} from './components/algs/algs-main/algs-main.component';
import {HeaderComponent} from './components/common/header/header.component';
import {ImageComponent} from './components/common/image/image.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {TestGridTileComponent} from './components/profile/test-grid-tile/test-grid-tile.component';
import { NavigationLinkComponent } from './components/control-panel/navigation-link/navigation-link.component';
import { TestsMainComponent } from './components/tests/tests-main.component';
import { UsersComponent } from './components/users/users.component';
import { AlgLogsComponent } from './components/algs/common/alg-logs/alg-logs.component';
import { UserInputComponent } from './components/algs/common/alg-logs/user-input/user-input.component';
import { SystemOutputComponent } from './components/algs/common/alg-logs/system-output/system-output.component';
import { AlgListComponent } from './components/algs/common/alg-list/alg-list.component';
import { AlgHeaderComponent } from './components/algs/common/alg-header/alg-header.component';
import { ControlPanelComponent as AlgsControl} from './components/algs/common/control-panel/control-panel.component';
import { AlgorithmComponent } from './components/algs/algorithm/algorithm.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProfileDataComponent } from './components/profile/profile-data/profile-data.component';
import { TestDetailsComponent } from './components/tests/test-details/test-details.component';
import { TestListComponent } from './components/tests/test-list/test-list.component';
import { SelectTaskComponent } from './components/tests/test-details/tasks/select-task/select-task.component';
import { MultiselectTaskComponent } from './components/tests/test-details/tasks/multiselect-task/multiselect-task.component';
import { InputTaskComponent } from './components/tests/test-details/tasks/input-task/input-task.component';
import { GoBackComponent } from './components/common/go-back/go-back.component';
import { TestBodyComponent } from './components/tests/tasks/test-body/test-body.component';
import { TestControlPanelComponent } from './components/tests/tasks/test-control-panel/test-control-panel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestRowComponent } from './components/tests/test-list/test-row/test-row.component';
import { TestCreateComponent } from './components/tests/test-create/test-create.component';
import { SubheaderComponent } from './components/common/subheader/subheader.component';
import { TaskListComponent } from './components/tests/test-create/task-list/task-list.component';
import { TaskTileComponent } from './components/tests/test-create/task-list/task-tile/task-tile.component';
import { SelectComponent } from './components/common/select/select.component';
import { AnswersListComponent } from './components/tests/test-create/task-list/task-tile/answers-list/answers-list.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      MainComponent,
      ControlPanelComponent,
      ProfileComponent,
      CoursesMainComponent,
      LectureLinkComponent,
      LectureListComponent,
      AlgsMainComponent,
      HeaderComponent,
      ImageComponent,
      FooterComponent,
      TestGridTileComponent,
      NavigationLinkComponent,
      TestsMainComponent,
      UsersComponent,
      AlgLogsComponent,
      UserInputComponent,
      SystemOutputComponent,
      AlgListComponent,
      AlgHeaderComponent,
      AlgsControl,
      AlgorithmComponent,
      SpinnerComponent,
      ProfileDataComponent,
      TestDetailsComponent,
      TestListComponent,
      SelectTaskComponent,
      MultiselectTaskComponent,
      InputTaskComponent,
      GoBackComponent,
      TestBodyComponent,
      TestControlPanelComponent,
      TestRowComponent,
      TestCreateComponent,
      SubheaderComponent,
      TaskListComponent,
      TaskTileComponent,
      SelectComponent,
      AnswersListComponent,
      UserEditComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule,
      FormsModule,
      MatGridListModule,
      MatSlideToggleModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatDividerModule,
      MatCardModule,
      MatListModule,
      MatInputModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatSelectModule,
      MatTooltipModule,
      MatCheckboxModule,
      MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
