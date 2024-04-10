export type BookingStats = "completed" | "confirmed" | "unconfirmed" | "unknown" | "cancelled" | "refunded" | "noshow" | "pending";
export interface BookingNote {
    sender: string;
    lut?: number;
    id: string;
    text: string;
    booking?: string;
    media: string[];
    iat: number;
}
export interface IBookingPayment {
    id: string;
    saleid: string;
    iat: number;
    amount: number;
    currency: string;
}
export interface IBookingActivity {
    data?: IRefData;
    description: string;
    id: string;
    event: string;
    iat: number;
}
export interface BookedItem {
    service: string;
    person: string;
    category: string;
    pricing: IPricing;
}
export interface IRefData {
    ref: string;
    type: string;
}
export interface IDiscount {
    coupon: string;
    org: string;
    discount: number;
    type: string;
    value: number;
}
export interface IPerson {
    name: string;
    id: string;
    email: string;
}
export interface IProfessional {
    id: string;
    email: string;
}
export interface IPricing {
    timing: AppointmentTiming;
    price: number;
    currency: string;
    type: string;
}
export interface AppointmentTiming {
    duration: string;
    text: string;
    type: string;
}
export interface IBookingTime {
    date: number;
    duration: string;
    start: number;
    end: number;
    time: string;
}
