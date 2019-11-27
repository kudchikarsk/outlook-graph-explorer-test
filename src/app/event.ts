// For a full list of fields, see
// https://docs.microsoft.com/graph/api/resources/event?view=graph-rest-1.0
export class Event {
    subject: string;
    organizer: Recipient;
    start: DateTimeTimeZone;
    end: DateTimeTimeZone;
    attendees: Attendee[];
    location: Location
}

// https://docs.microsoft.com/graph/api/resources/recipient?view=graph-rest-1.0
export class Recipient {
    emailAddress: EmailAddress;
}

// https://docs.microsoft.com/graph/api/resources/emailaddress?view=graph-rest-1.0
export class EmailAddress {
    name: string;
    address: string;
}

// https://docs.microsoft.com/graph/api/resources/datetimetimezone?view=graph-rest-1.0
export class DateTimeTimeZone {
    dateTime: string;
    timeZone: string;
}

export class Attendee {
    type: string;
    status: Status;
    emailAddress: EmailAddress
}

export class Status {
    response: string    //"declined",
    time: string;       //"2019-11-26T05:38:19.9784194Z"
}

export class Location {
    displayName:string;
    uniqueId:string;
}

export const STATUS_DECLINED:string  = "declined";