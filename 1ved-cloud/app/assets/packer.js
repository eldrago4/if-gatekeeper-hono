async function getSecretKey() {
  const response = await fetch('https://1ved.cloud/api/packey', {
    method: "GET",
    mode: "cors", 
    headers: {
      "Content-Type": "application/json"
    }
  });

  const { packerKey } = await response.json();
  const encoder = new TextEncoder();
  const keyData = encoder.encode(packerKey);

  return crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-GCM" },
      false,
      ["encrypt", "decrypt"]
  );
}


export async function encryptData(data) {
  const secretKey = await getSecretKey();
  const encoder = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      secretKey,
      encoder.encode(JSON.stringify(data))
  );

  return { iv: Array.from(iv), encrypted: Array.from(new Uint8Array(encrypted)) };
}

export async function decryptData({ iv, encrypted }) {
  const secretKey = await getSecretKey();
  const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: new Uint8Array(iv) },
      secretKey,
      new Uint8Array(encrypted)
  );

  return JSON.parse(new TextDecoder().decode(decrypted));
}

export async function updateData(encryptedData, newData) {
  const dataArray = await decryptData(encryptedData);
  const updatedArray = dataArray.concat(newData);
  return encryptData(updatedArray);
}
