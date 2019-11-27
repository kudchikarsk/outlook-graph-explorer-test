import { Room } from './room';

export class Event {
    constructor() {
    }

    Id: number;
    Title:string;
    Date:Date;
    StartTime:string;
    EndTime:string;
    ConsumeTimePer:number;
    Room:Room;
    
}
