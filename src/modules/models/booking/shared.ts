export interface BookingNote {
    id: string;
    text: string;
    iat: number;
    lut: number;
    sender: string;
}

export interface BookingPayment {
    id: string;
    saleid: string;
    iat: number;
    amount: number;
    currency: string;
}
