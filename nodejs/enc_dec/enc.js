const options = {
  password: process.env.encryptionPassword || 'hi',
  passwordSalt:'shubham'
};

const encryption = require('encryption-se')(options);

encryption
  .encrypt('This is to be encrypted')
  .then(enc => {
    // 'enc' contains encrypted string in base64 format
    console.log(enc)
  })
  .catch((err) => {
    // This is to handle errors
    console.log(err)
  })
