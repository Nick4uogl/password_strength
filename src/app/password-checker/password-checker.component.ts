import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss'],
})
export class PasswordCheckerComponent {
  password: string = '';
  strength: string = '';

  changeStrength() {
    if(this.password.length == 0 || this.password.length < 8) {
      this.strength = '';
    } else if (/^[a-z]+$/i.test(this.password) || /^\d+$/.test(this.password) || /^[^a-zA-Z0-9]+$/.test(this.password)) {
      this.strength = 'easy';
    } else if(/^[a-zA-Z\W]+$/.test(this.password) || /^[A-Za-z0-9]*$/.test(this.password) || /^[\d\W]+$/.test(this.password)) {
      this.strength = 'medium';
    } else if(/^[\w\W]+$/.test(this.password)) {
      this.strength = 'strong';
    }
  }
}
