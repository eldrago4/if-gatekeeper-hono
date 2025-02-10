
import { CompactEncrypt, compactDecrypt } from 'https://cdn.jsdelivr.net/npm/jose@5.9.6/+esm';
import { createSecretKey } from 'crypto';

import dotenv from 'dotenv';
dotenv.config();
const secretString = process.env.packerKey;
const secretKey = createSecretKey(Buffer.from(secretString, 'utf8'));

export async function encryptData(data) {
    const encoder = new TextEncoder();
    const jwe = await new CompactEncrypt(encoder.encode(JSON.stringify(data)))
      .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
      .encrypt(secretKey);
    return jwe;
  }
  
export async function decryptData(jwe) {
    const { plaintext } = await compactDecrypt(jwe, secretKey);
    return JSON.parse(new TextDecoder().decode(plaintext));
}

export async function updateData(encryptedData, newData) {
    const dataArray = await decryptData(encryptedData);
    const updatedArray = dataArray.concat(newData);
    const newEncryptedData = await encryptData(updatedArray);
    return newEncryptedData;
}


