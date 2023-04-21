import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-icon-display',
  templateUrl: './tag-icon-display.component.html',
  styleUrls: ['./tag-icon-display.component.scss'],
})
export class TagIconDisplayComponent {
  @Input() tag = '';
}
