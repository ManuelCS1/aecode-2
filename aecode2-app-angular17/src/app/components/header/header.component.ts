import { Component } from '@angular/core';
import {
  SvgBlogComponent,
  SvgCoursesComponent,
  SvgHomeComponent,
  SvgNotificationComponent,
  SvgProfileComponent,
  SvgScriptComponent,
} from '../icons';
import { SvgPointComponent } from '../icons/svg-point/svg-point.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterLink } from '@angular/router';
import { SvgUnlogUserComponent } from '../icons/svg-unlog-user/svg-unlog-user.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgNotificationComponent,
    SvgPointComponent,
    LogInComponent,
    RouterLink,
    SvgScriptComponent,
    SvgHomeComponent,
    SvgProfileComponent,
    SvgCoursesComponent,
    SvgBlogComponent,
    SvgUnlogUserComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user = '';
}
