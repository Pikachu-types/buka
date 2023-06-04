import axios from "axios";
import { isAxiosError } from 'axios';
import { CustomError, CustomFCM, FCMResponse } from "labs-sharable";
import { LinklyAPIRequest, LinklyAPIResponse } from "../interfaces/miscellenous";
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
   * cancel request from consumer
   * @param {LinklyAPIRequest} request model
   * @return {Promise<LinklyAPIResponse>} returns response.
   */
  public static async cancelRequest(request: LinklyAPIRequest)
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

}