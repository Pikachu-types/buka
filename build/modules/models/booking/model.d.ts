export interface Booking {
    iat: number;
    lut: number;
    repetition: string;
    id: string;
    client: string;
    people: Person[];
    time: Time;
    currency: string;
    status: string;
    items: Item[];
    professional: Professional;
    activity: Activity[];
}
export interface Activity {
    event: string;
    iat: number;
    id: string;
    description: string;
    data: Data;
}
export interface Data {
    type: string;
    ref: string;
}
export interface Item {
    category: string;
    service: string;
    pricing: Pricing;
    person: string;
}
export interface Pricing {
    timing: Timing;
    type: string;
    price: number;
    currency: string;
}
export interface Timing {
    duration: number;
    type: string;
    text: string;
}
export interface Person {
    id: string;
    name: string;
    email: string;
}
export interface Professional {
    id: string;
    email: string;
}
export interface Time {
    date: number;
    duration: number;
    time: string;
    start: number;
    end: number;
}
