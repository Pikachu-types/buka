import { TaxBehavior } from "labs-sharable";
import { BookingData, ReservationData } from "../models/booking";
import { OrganisationData } from "../models/clients";
import { ReviewRequest } from "../models/review_request_model";
import { UserModel } from "../models/user";
/**
 * Invoice item data
 */
export interface Invoice {
    shipping: ShippingDetails;
    due: number;
    items: InvoiceItems[];
    subtotal: number;
    paid: number;
    vat: number;
    date: number;
    invoiceID: string;
    currency: string;
    taxBehavior: TaxBehavior;
    footer?: string;
}
/**
 * Compact Reservation Doc
*/
export interface ShippingDetails {
    name: string;
    address: string;
    country: string;
    phone: string;
    email: string;
    vat: string;
}
/**
 * Compact Reservation Doc
*/
export type CompactReservationModel = {
    user?: UserModel;
    booking: BookingData;
    reservation: ReservationData;
    client: OrganisationData;
    review?: ReviewRequest;
};
/**
 * Invoice address
 */
export interface InvoiceAddress {
    /**
     * Connected business id
     */
    clientID?: string;
    name: string;
    phone?: string;
    email: string;
    address: string;
    vat: string;
}
/**
 * Item list
 */
export interface InvoiceItems {
    /**
     * Item name/description
     */
    item: string;
    quantity: number;
    amount: number;
}
/**
 * PayLink user
 */
export interface PayLinkUser {
    name: string;
    id?: string;
    email?: string;
    mobile?: string;
}
/**
 * pay link response
 */
export interface PaymentLinkResponse {
    url: string;
    id: string;
    status: string;
}
/**
 * pay link structure
 */
export interface PayLinkReference {
    identifier: string;
    provider: string;
}
/**
 * Pay link identifier
 */
export interface PayLinkIdentifier {
    reference: string;
    source: string;
}
/**
 * Booking Checkout Interface
 */
export interface BookingCheckout {
    discount: number;
    expectedGems: number;
    fee: number;
    paid: number;
    previousPayment: number;
    price: number;
    promoCode: string;
    reference?: string;
}
/**
 * invoice tax calc result
 */
export interface TaxCalcResult {
    /**
     * Total excluding tax
     */
    excTax: number;
    /**
     * Value added tax
     */
    vat: number;
    /**
     * Calculated total based on tax
     */
    total: number;
}
/**
* Invoice type
*/
export declare enum InvoiceType {
    invoice = "Invoice",
    receipt = "Receipt"
}
