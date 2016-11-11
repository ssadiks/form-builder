import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BoxConfirmService } from '../box-confirm/box-confirm.service';

@Component({
  moduleId: module.id,
  selector: 'box-confirm',
  templateUrl: 'box-confirm.html'
})

export class BoxConfirmComponent implements OnInit {
  @Input() inpout: Object;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  displayBox: Object;
  subscription: Subscription;
  
  constructor(private boxConfirmService: BoxConfirmService) {
    this.subscription = this.boxConfirmService.displayBox$.subscribe((inpout: boolean) => { this.displayBox = inpout);
  }
  
  //ngOnInit(): void {
  //  this.displayBox = this.boxConfirmService.getDisplay();
  //}
  
  setDisplayBox(newValue: boolean) {
    this.displayBox = newValue;
    console.log(this.displayBox);
    this.subscription = this.boxConfirmService.displayBox$.subscribe(this.displayBox);
  }
  
  cancel() : void {
    this.setDisplayBox(false);
    this.notify.emit(false);
  }
  
  agree() : void {
    this.setDisplayBox(false);
    this.notify.emit(true);
  }
  
}