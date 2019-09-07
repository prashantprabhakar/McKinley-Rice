// @ts-check
const userModel = require('./../../models/users.model')
const handleResponse = require('./../../utils/responseHanlder')
const roles = require('../../config/config').roles
const { hashPass} = require('../../utils/bcrypt')


exports.signup = async(req,res) => {
  try{
    let { email, password, name, role, address, contactNo } = req.body
    console.log({email, password, name, role, address, contactNo })
    if( !email || !password || !role || !address || !contactNo ) {
      return handleResponse(res, 404, 'Missing params')
    }

    // validate role
    if(!roles.includes(role)){
      return handleResponse(res, 400, 'Role not supported')
    }

    let hashedPass = await hashPass(password)

    let user = await new userModel({
      email, password: hashedPass, name, role, address, contactNo
    }).save()
    return handleResponse(res, 201, 'signup successful')
  } catch(e){
    console.log(e)
    return handleResponse(res,500)
  }
}