import { TaxBehavior } from "labs-sharable";
import { InvoiceAddress, InvoiceItems } from "../../interfaces/documents";
import { Status } from "../../enums/documents";
import { OrganisationData } from "../clients";
export declare namespace PaymentRequest {
    /**
     * payment provider interface i.e stripe, tink, swish, aza
     */
    interface PaymentProvider {
        identifier: string;
        link: string;
        provider: string;
    }
    /**
     * user
     */
    interface Customer {
        name: string;
        address: string;
        country: string;
        vat?: string;
        id?: string;
        email: string;
        mobile: string;
    }
    const isPaymentRequest: (value: IncomingRequest) => value is IncomingRequest;
    /**
     * user
     */
    interface IncomingRequest {
        /**
         * Connect business shipping details
         */
        organisation: InvoiceAddress;
        /**
         * Amount paid
         */
        paid: number;
        /**
         * Date created
         */
        created?: number;
        /**
         * Date due
         */
        due: number;
        /**
         * VAT if applicable
         */
        vat: number;
        /**
         * Connected business id
         */
        client: string;
        /**
         * If this payment is to be attributed to some other collection i.e booking
         */
        identifier?: string;
        /**
         * Add footer if needed
         */
        footer?: string;
        /**
         * tax behaviour -- inclusive or exclusive
         */
        taxBehaviour: TaxBehavior;
        /**
         * Payee details
         */
        customer: Customer;
        /**
         * Line items
         */
        items: InvoiceItems[];
        /**
         * Reference detail for payee
         */
        reason: string;
        /**
         * Invoice currency
         */
        currency: string;
        test: boolean;
    }
    class Model {
        /**
         * Document ID {payment_{id}}
         */
        id: string;
        /**
         * Client ID ie. client_{id}
         */
        client: string;
        /**
         * Timestamp of creation
         */
        created: number;
        lut: number;
        /**
         * When was it paid
         */
        paidAt: number | undefined;
        /**
         * Timestamp of expiration
         */
        due: number;
        vat: number;
        /**
         * Charge currency
         */
        currency: string;
        /**
         * Amount chargeable
         */
        amount: number;
        /**
         * if inclusive or exclusive
         */
        taxBehavior: undefined | TaxBehavior;
        /**
         * Invoice items
         */
        items: undefined | InvoiceItems[];
        /**
         * Payment providers
         */
        providers: undefined | PaymentProvider[];
        /**
         * If this payment is to be attributed to some other collection i.e booking
         */
        identifier: string | undefined;
        /**
         * Status of payment
         */
        status: Status;
        /**
         * This is like a reference of payment. It helps the payee know what they are about to pay for
         */
        reason: string;
        /**
         * Who is about to pay? This is now depreciated
         * Use customer instead!!!
         */
        user: undefined | Customer;
        /**
         * This is the new model for taking over user reference that existed before
         * I will write an backend alg to resolve this changes
         */
        customer: undefined | Customer;
        /**
         * Test payment or not
         */
        test: boolean;
        /**
         * Incoming request in encrypted string for ease of receipt generation
         */
        request: string | undefined;
        clientData: OrganisationData | undefined;
        /**
         * Change record to Model class
         *
         * @param {Record<string, unknown>} obj  json object from db
         * @return {Model} this class
         */
        static fromJson(obj: Record<string, unknown>): Model;
        /**
         * Helper class function to find one specific object based on id
         *
         * @param {Model[]} list an array to sort from and find given
         * @param {string} id provide the needed id to match for
         * @return {Model | undefined} found object else undefined
         */
        static findOne(list: Model[], id: string): Model | undefined;
        /**
         * This class handler to json
         * @return {string} text
         */
        toJsonString(): string;
        /**
        * get document in map format
        * @return { Record<string, unknown>} returns doc map .
        */
        toMap(): Record<string, unknown>;
        /**
         * Create payment id
         * @return {string} text
         */
        static generateID(): string;
    }
}
