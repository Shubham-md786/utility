const options = {
  password: process.env.encryptionPassword || 'h z',
  passwordSalt:'ss'
};

const encryption = require('encryption-se')(options);

encryption
  .decrypt('xVg3kVwmOy1/4WW2uI1b4W3H8+9sBv0azvZM/0ZrRm9NalL/KE9AT3jQPA1w9TXF')
  .then((text) => {
    // 'text' contains decrypted string
    console.log(text)
  })
  .catch((err) => {
    // This is to handle errors
    console.log(err)
  })
