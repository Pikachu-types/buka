export interface ConsoleUser {
    id: string;
    iat: number;
    lut?: number;
    role: string;
    fcm?: Fcm;
    profile: Profile;
    contact: Contact;
    country: Country;
}
export interface Contact {
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
}
export interface Country {
    code: string;
    timeZone: TimeZone;
}
export interface TimeZone {
    zone: string;
    text: string;
}
export interface Fcm {
    device: string;
    token: string;
}
export interface Profile {
    first: string;
    image?: string;
    last: string;
}
