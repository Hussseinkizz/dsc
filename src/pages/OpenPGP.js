import {openpgp} from 'openpgp';

const sendConfirmationEmail = async (to, confirmationLink) => {
  // Set up ProtonMail credentials
  const privateKey = 'bf125f8c2c07002444d28dded8529fcf6a88734e';
  const publicKey = 'aea471b118ab691e040d30b4d70e3502d0e5bd44';
  const passphrase = 'YOUR_PASSPHRASE';
  const senderEmail = 'jlyadda@proton.me';
  const senderName = 'jlyadda';

  // Set up email content
  const subject = 'UCU GDSC Login Details';
  const message = `Please click the following link to confirm your account: ${confirmationLink}`;

  // Create OpenPGP options
  const options = {
    message: openpgp.message.fromText(message),
    publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
    privateKeys: (await openpgp.key.readArmored(privateKey)).keys,
    format: 'utf8',
    passphrase,
    senderEmail,
    senderName,
  };

  // Encrypt and sign the email
  const { data } = await openpgp.encrypt(options);

  // Send the email using your preferred email service
  // (e.g., using nodemailer or an HTTP API)
  // copy url
  //
};