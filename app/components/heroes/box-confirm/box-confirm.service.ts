import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
//import { BoxConfirmService } from '../box-confirm/box-confirm.service';

@Injectable()
export class BoxConfirmService {
    
  // Observable boolean sources
  private displayBoxSource = new Subject<boolean>();
  // Observable boolean streams
  displayBox$ = this.displayBoxSource.asObservable();
  // Service message commands
  announceDisplayBox(displayBox: boolean) {
    this.displayBoxSource.next(displayBox);
    console.log(this.displayBox$);
  }
  
  

  
  //afficher(displayIt: boolean) {
  //  this.displayBox = displayIt;
  //  console.log('afficher' + this.displayBox);
  //}
  //closeBoxConfirm() {
  //  this.displayBox = false;
  //  console.log('afficher' + this.displayBox);
  //}
  
  
}
