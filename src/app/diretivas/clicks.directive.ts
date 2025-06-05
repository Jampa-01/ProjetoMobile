import { Directive,  EventEmitter, HostListener, Input, Output  } from '@angular/core';

@Directive({
  selector: '[appClicksnegar]'
})
export class ClicksDirective {

 @Input() Time = 1000; 
  @Output() MultiClick = new EventEmitter<Event>();

  private isClicked = false;

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {
    if (!this.isClicked) {
      this.isClicked = true;
      this.MultiClick.emit(event);

      setTimeout(() => {
        this.isClicked = false;
      }, this.Time);
    }
  }
}
