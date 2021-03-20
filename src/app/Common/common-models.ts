import { Guid } from "guid-typescript";

export class ListItem {
    public title: string;
    public description: string;
    public bgColor: string;
    public id: Guid
    constructor(title: string) {
        this.title = title;
        this.id = Guid.create();
    }
}

export class SectionData {
    public title: string;
    public items: ListItem[] = [];
    constructor(title: string) {
        this.title = title;
    }
}