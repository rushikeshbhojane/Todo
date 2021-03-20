import { Component, OnInit } from '@angular/core';
import { SectionData } from './Common/common-models';
import { STRING_CONSTANTS } from './Common/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todolist';
  public STRING_CONSTANTS : any = STRING_CONSTANTS;
  public dataList : SectionData[] = [];
  public ngOnInit() {
    this.dataList = JSON.parse(JSON.stringify(this.SectionDataList));
  }

  public get SectionDataList() : SectionData[] {
    let completeList : SectionData[] = []; 
    const localStorageString : string = localStorage.getItem(STRING_CONSTANTS.LOCAL_STORAGE_KEY);
    if (localStorageString) {
      completeList = JSON.parse(localStorageString);
    }
    else {
      completeList.push(
        new SectionData(STRING_CONSTANTS.TASKS),
        new SectionData(STRING_CONSTANTS.COMPLETED),
        new SectionData(STRING_CONSTANTS.DEFERED),
        new SectionData(STRING_CONSTANTS.REJECTED)
      );
      localStorage.setItem(STRING_CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(completeList));
    }

    return completeList;
  }

  public saveListToLocalStorage() {
    localStorage.setItem(STRING_CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(this.dataList));
  }
  
}

