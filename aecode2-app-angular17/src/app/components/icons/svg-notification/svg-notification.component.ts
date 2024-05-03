import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-notification',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      [class]="class"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
      />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </svg>
  `,
  styles: ``,
})
export class SvgNotificationComponent {
  @Input() class = '';
}
