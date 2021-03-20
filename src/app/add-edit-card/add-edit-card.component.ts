import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../Common/common-models';
import { STRING_CONSTANTS } from '../Common/Constants';

@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.scss']
})
export class AddEditCardComponent implements OnInit {
  public STRING_CONSTANTS : any = STRING_CONSTANTS;
  public colorsList: string[] = [
    "#F4F4F4","#F8F1FF","#FEF7EF","#EEF7FB","#F4F4FF","#F8E8E8","#EBFDF5","#FFF3E6"
  ];
  @Input() listItem: ListItem;
  @Output() saveEvent = new EventEmitter();
  @Output() discardEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if (!this.listItem.bgColor) {
      this.listItem.bgColor = this.colorsList[0];
    }
  }

  public save(event: MouseEvent): void {
      this.saveEvent.emit();
  }

  public discard(event: MouseEvent) : void {
    this.discardEvent.emit();
  }

}
