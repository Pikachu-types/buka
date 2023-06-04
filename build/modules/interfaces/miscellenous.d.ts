/**
 * Linkly API Request
 */
export type LinklyAPIRequest = {
    /**
     * account email
     */
    email: string;
    /**
     * account workspace id
     */
    workspace: number;
    /**
     * Account api key
     */
    apiKey: string;
    /**
     * The destination url no https://
     */
    url: string;
    /**
     * It's the bit that goes after
     * the domain e.g. /offer
     */
    slug: string;
    /**
     * Custom Domain
     */
    domain: string;
    /**
     * Custom destination name e.g Test URL
     */
    name: string;
};
/**
 * Linkly API Response
 */
export type LinklyAPIResponse = {
    name: string;
    slug: string;
    domain: string;
    url: string;
    og_image: string;
    full_url: string;
};
