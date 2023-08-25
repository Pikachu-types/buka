import axios, { isAxiosError } from "axios";
import { CustomError, CustomFCM, FCMResponse } from "labs-sharable";
import { DynamicLinkBodyParam, DynamicLinkParam, LinklyAPIRequest, LinklyAPIResponse } from "../interfaces/miscellenous";
import { Buka } from "../models/buka";

/**
 * Api client helper
 */
export class ServerApiClient {
  /**
   * Simple api call function for http calls
   * @param {Record<string, unknown>} body payload
   * @return {Promise<number>} returns 1 if device is active
   * 0 if not registered
   * -1 if not found.
   */
  public static async cloudMessage(
    body: CustomFCM,
    key: string
  ): Promise<number> {
    try {
      const response = await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        body: JSON.stringify(body.toMap()),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "key=" + key,
        },
      });

      if (!response.ok) {
        throw new CustomError(`Error! status: ${response.status}`);
      } else {
        const result = (await response.json());

        const data: FCMResponse = {
          multicastId: result.multicast_id,
          success: result.success,
          failure: result.failure,
          canonicalIds: result.canonical_ids,
          results: result.results,
        };
        if (data.success == 1) {
          return 1;
        } else {
          return 0;
        }
      }
    } catch (error) {
      throw new CustomError(`${error}`, -1);
    }
  }

  /**
   * create custom link
   * @param {LinklyAPIRequest} request model
   * @return {Promise<LinklyAPIResponse>} returns response.
   */
  public static async linklyLinkGenerator(request: LinklyAPIRequest)
    : Promise<LinklyAPIResponse> {
    try {
      const { data, status } = await axios.post<LinklyAPIResponse>(
        Buka.linklyEndpoint,
        {
          "email": request.email,
          "url": request.url,
          "domain": request.domain,
          "slug": request.slug,
          "api_key": request.apiKey,
          "workspace_id": request.workspace
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      if (status == 200) {
        return data;
      } else {
        throw new CustomError(JSON.stringify(data), status);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log("error message: ", error.message);
        const response = error.response;
        if (response) {
          throw new CustomError("", response.status, response.data);
        } else {
          throw new CustomError(error.message, error.status ?? 500);
        }
      } else {
        console.log("unexpected error: ", error);
        throw new CustomError("An unexpected error occurred", 500);
      }
    }

  }

  /**
   * Create dynamic link with http calls
   * @param {DynamicLinkCreation} data payload
   * @return {Promise<string>} returns f
   */
  public static async generateDynamicLink(
    data: DynamicLinkParam): Promise<string> {
    const body: DynamicLinkBodyParam = {
      dynamicLinkInfo: {
        domainUriPrefix: data.prefix,
        link: data.link ?? Buka.linkBuilder(data.header,
          data.param, data.console ?? false),
        androidInfo: {
          androidMinPackageVersionCode: "1",
          androidPackageName: data.androidPackageName,
        },
        iosInfo: {
          iosAppStoreId: data.iosAppStoreID,
          iosIpadBundleId: data.iosIpadBundleID ?? data.iosBundleID,
          iosBundleId: data.iosBundleID,
        },
        socialMetaTagInfo: data.social ? {
          socialDescription: data.social.description,
          socialImageLink: data.social.image,
          socialTitle: data.social.title,
        } : undefined
      }
    };

    try {
      const response = await
        fetch("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" +
          data.apiKey,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              "Authorization": "key=" + data.apiKey,
            },
          });
      if (!response.ok) {
        throw new CustomError(`Error! status: ${response.status}`);
      } else {
        const result = (await response.json());
        if (result.shortLink !== undefined) {
          return result.shortLink;
        } else {
          return "";
        }
      }
    } catch (error) {
      throw new CustomError(`Creation of dynamic link error: ${error}`);
    }
  }

}