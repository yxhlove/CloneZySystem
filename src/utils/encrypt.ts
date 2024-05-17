import { SM4Util } from "./sm4";

const AES_SECRET_KEYS = [
  -4, -70, -89, 123, 23, 20, 96, 48, 79, -127, -9, -63, 97, 57, -83, -46,
];

const sm4 = new SM4Util();

export function aesEncrypt(data: string) {
  if (!data) return "";
  return sm4.encryptData_CBC(data);
}

export function aesDecrypt(encrypted: string) {
  if (!encrypted) return "";

  return sm4
    .decryptData_CBC(encrypted)
    .replace(/\s+/g, "")
    .replace(
      /\u0000|\u0001|\u0002|\u0003|\u0004|\u0005|\u0006|\u0007|\u0008|\u0009|\u000a|\u000b|\u000c|\u000d|\u000e|\u000f|\u0010|\u0011|\u0012|\u0013|\u0014|\u0015|\u0016|\u0017|\u0018|\u0019|\u001a|\u001b|\u001c|\u001d|\u001e|\u001f|\u007F/g,
      "",
    );
}
