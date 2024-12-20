import * as openpgp from "openpgp";

async function generateKeyPair() {
  const { privateKey, publicKey } = await openpgp.generateKey({
    type: "rsa", // RSA keys
    rsaBits: 2048, // Key size
    userIDs: [{ name: "User", email: "user@example.com" }], // This associates the keys with a user, which I will implement eventually
  });

  console.log("Public Key:", publicKey);
  console.log("Private Key:", privateKey);

  return { privateKey, publicKey }; // I need to save these to a secure file
}

// Call the function
generateKeyPair();
