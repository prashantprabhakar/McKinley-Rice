//@ts-check
let {encrypt, decrypt} = require('./../../utils/encryption')
const handleResponse = require('./../../utils/responseHanlder')


exports.encryptMessage = (req, res) => {
  try {
    let {message} = req.body
    let encMessage = encrypt(message)
    return handleResponse(res, 200, 'Message encrypted', encMessage)
  } catch(e){
    return handleResponse(res,500)
  }
}

exports.decryptMessage = (req,res) => {
  try {
    let {message} = req.body
    let decMessage = decrypt(message)
    return handleResponse(res, 200, 'Message decrypted', decMessage)
  } catch(e){
    return handleResponse(res,500)
  }
}