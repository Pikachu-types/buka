import {CipherType, CustomError, LabsCipher} from "labs-sharable";
import { ApprovedClients } from "../models/approvedClients";

/**
 * Callable Function Helper class
 */
export class FunctionHelpers {
  /**
   * Create a proper string from the CipherType model
   * @param {string} source content to get RSA code
   * @param {string} secret designated cipher secret code
   * @return {Buffer} returns value.
   */
  public static decipherRSAKey(source: string,
      secret: string): Buffer {
    const data = FunctionHelpers.changeCipherStringToModel(source);
    return Buffer.from(
        LabsCipher.decrypt(data, secret), "utf-8"
    );
  }

  /**
   * This class handler to RSA keys
   * @param {string} cipherKey  key
   * @param {string} encoded  rsa key written in bcrypt
   * @return {Buffer} buffer value
   */
  public static bcryptToRSAKey(cipherKey: string,
      encoded: string): Buffer | undefined {
    try {
      const pV = FunctionHelpers.
          changeCipherStringToModel(encoded);
      const publicKey = LabsCipher.decrypt(pV, cipherKey);
      return Buffer.from(publicKey, "utf-8");
    } catch (_) {
      return;
    }
  }

  /**
   * Create a proper string from the CipherType model
   * @param {CipherType} source content to string from
   * @return {string} returns value.
   */
  public static createCipherString(source: CipherType): string {
    return `${source.content}-bu(${source.iv})`;
  }

  /**
   * Create a proper string from the CipherType model
   * long function
   * @param {string} secret secret key
   * @param {string} source content
   * @return {string} returns value.
   */
  public static bukaCipherString(secret: string,
      source: string): string {
    return FunctionHelpers.
        createCipherString(LabsCipher.encrypt(source, secret));
  }

  /**
   * Verify Client side app approval
   * @param {string} secretKey key used to unlock cipher
   * @param {string} source content to string from
   * @return {string} returns value.
   */
  public static verifyAppAuthorization(secretKey: string,
      source?: string): boolean {
    if (source === undefined) return false;

    let appID;
    try {
      const signature = FunctionHelpers.
          changeCipherStringToModel(source);
      appID = LabsCipher.decrypt(signature, secretKey);
      return ApprovedClients.applications.includes(appID);
    } catch (_) {
      return false;
    }
  }

  /**
   * Create a proper string from the CipherType model
   * @param {CipherType} source content to string from
   * @return {string} returns value.
   */
  public static changeCipherStringToModel(source: string): CipherType {
    const cipher = source.split("-bu");

    if (cipher.length != 2) {
      throw new CustomError("Invalid source string");
    }

    return {
      iv: cipher[1].replace("(", "").replace(")", ""),
      content: cipher[0],
    };
  }


  /**
   * Verify the requester of a http request
   * @param {string} secretKey cipher secret key
   * @param {string} source authorization key found in header
   * @return {boolean} returns state.
   */
  public static verifyRequester(secretKey: string, source?: string): boolean {
    if (source === undefined) return false;

    let appID;
    try {
      const signature = FunctionHelpers.
          changeCipherStringToModel(source);
      appID = LabsCipher.decrypt(signature, secretKey);
      return ApprovedClients.requesters.includes(appID);
    } catch (err) {
      return false;
    }
  }
}
