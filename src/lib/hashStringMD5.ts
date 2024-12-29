import crypto from "crypto";

export const hashStringMD5 = (text: string): string => {
  const hashBuffer = crypto.createHash("md5").update(text).digest();
  const base64Hash = hashBuffer.toString("base64");
  return base64Hash.replace(/\+/g, "-").replace(/\//g, "-").replace(/=+$/, "-");
};
