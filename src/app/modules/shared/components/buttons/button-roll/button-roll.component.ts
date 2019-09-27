import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ButtonRoll } from '../../../../../enums/button-roll.enum';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-button-roll',
  templateUrl: './button-roll.component.html',
  styleUrls: ['./button-roll.component.scss']
})
export class ButtonRollComponent implements OnInit, OnDestroy {

  @Input() buttonSide: ButtonRoll;
  @Input() elementToScroll: ElementRef<any>;

  private arrowLeft = faAngleLeft;
  private arrowRight = faAngleRight;
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.checkButtonSide();
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public handleMouseOver() {
    if (this.buttonSide === ButtonRoll.LEFT) {
      this.handleOverLeftButton();
    } else {
      this.handleOverRightButton();
    }
  }

  public addClassToButton() {
    return {
      left: this.buttonSide === ButtonRoll.LEFT ? true : false,
      right: this.buttonSide === ButtonRoll.RIGHT ? true : false
    };
  }

  public addIconToButton() {
    return this.buttonSide === ButtonRoll.LEFT ? this.arrowLeft : this.arrowRight;
  }

  public unsubscribeOnMouseOut() {
    this.subscription.unsubscribe();
  }

  private checkButtonSide() {
    if (!this.buttonSide) {
      throw new Error('Inside app-button-roll-component, inform property buttonSide');
    }
  }

  private handleOverLeftButton() {
    this.subscription = interval(75).pipe(
      tap(() => this.elementToScroll.nativeElement.scrollLeft = this.elementToScroll.nativeElement.scrollLeft - 100)
    ).subscribe();
  }

  private handleOverRightButton() {
    this.subscription = interval(75).pipe(
      tap(() => this.elementToScroll.nativeElement.scrollLeft = this.elementToScroll.nativeElement.scrollLeft + 100)
    ).subscribe();
  }

}
