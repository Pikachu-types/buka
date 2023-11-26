import { Locales } from "../enums/documents";

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
  name: string,
  slug: string,
  domain: string,
  url: string,
  og_image: string,
  full_url: string
};

/**
 * Dynamic linking 
*/
export type DynamicLinkParam = {
  link?: string,
  console?: boolean,
  prefix: string,
  apiKey: string,
  header: string,
  param: string,
  androidPackageName: string,
  iosBundleID: string,
  iosAppStoreID: string,
  iosIpadBundleID?: string,
  social?: {
    title: string,
    description: string,
    image: string,
  }
}

/**
 * Dynamic link body params 
*/
export type DynamicLinkBodyParam = {
  dynamicLinkInfo: {
    domainUriPrefix: string,
    link: string,
    androidInfo: {
      androidPackageName: string,
      androidMinPackageVersionCode: string,
    },
    iosInfo: {
      iosBundleId: string,
      iosAppStoreId: string,
      iosIpadBundleId: string,
    },
    socialMetaTagInfo?: {
      socialTitle: string,
      socialDescription: string,
      socialImageLink: string,
    } 
  }
}


/**
 * new reservation notify
*/
export type NewReservationNotify = {
  business: string;
  locale: Locales;
  date: string;
  chatLink: string | undefined;
  link: string;
}


/**
 * Default response interface
 */
export interface DefaultResponse {
  status: string;
  reason?: string;
  data?: Record<string, unknown>;
};