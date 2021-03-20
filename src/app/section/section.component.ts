import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem, SectionData } from '../Common/common-models';
import { STRING_CONSTANTS } from '../Common/Constants';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() sectionData: SectionData;
  @Output() changeEvent = new EventEmitter();
  public STRING_CONSTANTS : any = STRING_CONSTANTS;
  public showAddCardPanel: boolean = true;
  public showAddEditCard: boolean = false;
  public newCardTitle: string  = "";
  public item: ListItem;
  constructor() { }

  ngOnInit() {
  }

  public onAddNewCard(event: MouseEvent) : void {
    this.showAddCardPanel = false;
  }

  public OnAddCardButtonClick(event: MouseEvent) {
    if (this.newCardTitle) {
      this.item = new ListItem(this.newCardTitle);
      this.showAddEditCard = true;
    }
  }

  public onEditClick(item : ListItem) {
    this.item = item;
    this.showAddEditCard = true;
  }

  public OnCancelButtonClick(event: MouseEvent) {
    this.resetLocal();
  }

  public onSave() {
    if (!this.sectionData.items.some((item : ListItem) => {
        return item.id === this.item.id
    })) {
        this.sectionData.items.push(this.item);
    }
    this.resetLocal();
    this.changeEvent.emit();
  }

  public onDiscard() {
    this.resetLocal();
  }

  private resetLocal() {
    this.item = null;
    this.newCardTitle ="";
    this.showAddCardPanel = true;
    this.showAddEditCard = false;
  }

  public onDeleteClick(itemToBeDeleted: ListItem) {
    this.sectionData.items = this.sectionData.items.filter(
      function(item): boolean {
        return itemToBeDeleted.id != item.id
      }
    );
    this.changeEvent.emit();  
  }

  dropped(event: CdkDragDrop<string[]>) {
    moveItemInArray(
       this.sectionData.items, 
       event.previousIndex, 
       event.currentIndex
      );
    this.changeEvent.emit();
  }
}
