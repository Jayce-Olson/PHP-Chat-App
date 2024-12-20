import * as openpgp from "openpgp";

async function decryptMessage(encryptedMessage, privateKey, passphrase) {
  const privateKeyObj = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKey }),
    passphrase,
  });

  const message = await openpgp.readMessage({
    armoredMessage: encryptedMessage, // Base64 encoded message from the server
  });

  const { data: decrypted } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKeyObj,
  });

  return decrypted;
}

// Example usage
const encryptedMessage = `...`; // Encrypted message from the server
const privateKey = `...`; // Client's private key
const passphrase = "your-passphrase"; // If the private key is passphrase-protected

decryptMessage(encryptedMessage, privateKey, passphrase).then((decrypted) => {
  console.log("Decrypted Message:", decrypted);
});
