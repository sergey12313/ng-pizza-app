import {Component, Input} from '@angular/core';

@Component({
  selector: 'pa-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  isLoaded = false;
  @Input() imgUrl?: string;
  @Input() name?: string;
  onLoadingComplete = () => {
    console.log('loaded');
  };

  get formattedName() {
    if (!this.name || this.name.trim().length === 0) {
      return null;
    }
    const name = this.name
      .trim()
      .split(' ')
      .filter((n) => n.length > 0);
    if (name.length > 1) {
      return name[0][0].toUpperCase() + name[1][0].toUpperCase();
    } else {
      return name[0][0].toUpperCase();
    }
  }
}
