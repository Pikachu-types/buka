import { TimeZone } from "./user";

export interface Business {
    id: string;
    iat: number;
    lut?: number;
    links: Links;
    info: Info;
    calendar: Calendar;
    location: Location;
    team: string[];
    billing: BusinessBilling;
    payments?: PaymentConnectors;
    legal: Legal;
    referral: Referral;
    marketplace: Marketplace;
}

export interface BusinessBilling {
    name: string;
    location: Location;
    note: string;
}

export interface Location {
    city: string;
    country: string;
    postCode: string;
    place: string;
    formatted: string;
    longitude: number;
    latitude: number;
}

export interface Calendar {
    weekStart: string;
    timeZone: TimeZone;
}

export interface Info {
    mobile: string;
    email: string;
    teamSize: string;
    services: Services;
    logo: string;
    description: string;
    name: string;
    country: string;
}

export interface Services {
    primary: string;
    others: string[];
}

export interface Legal {
    rcNumber: string;
    name: string;
    vat: string;
}

export interface Links {
    website: string;
    facebook: string;
    instagram: string;
}

export interface Marketplace {
    accountType: string;
    availability: string;
    billing: MarketplaceBilling;
    location: Location;
    schedule: Schedule;
    photos: string[];
}

export interface MarketplaceBilling {
    stripe: string;
}

export interface Schedule {
    sun: WeekDayDuration;
    mon: WeekDayDuration;
    tue: WeekDayDuration;
    wed: WeekDayDuration;
    thu: WeekDayDuration;
    fri: WeekDayDuration;
    sat: WeekDayDuration;
    max: number;
}

export interface WeekDayDuration {
    begin: string;
    end: string;
}

export interface PaymentConnectors {
    stripe?: PayProviderData,
    tink?: PayProviderData,
}

/**
 * Data
*/
export interface PayProviderData {
    id: string,
    testID?: string,
    created?: number,
    completed: boolean,
}

export interface Referral {
    source: string;
    code: string;
}
