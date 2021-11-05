import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() message = '';
  @Input() disabled = false;
  @Input() type = 'green';
  @Output() onClick = new EventEmitter();

  click() {
    if (this.disabled) {
      return;
    }

    this.onClick.emit();
  }
}
