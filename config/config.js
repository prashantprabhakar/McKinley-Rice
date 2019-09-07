module.exports = {
    port: 3012,
    mongoUrl: 'mongodb://localhost:27017/mckinley-rice',
    // jwt
    secret : 'ckbdcbkdbcdsc9868i95rrf7',
    jwtTokenExpireTime: 86400, // 24 hours

    // can also kept in DB if implementing in large project
    roles: ['user', 'admin', 'customerSupport', 'deliveryPerson'],

    // init db
    seedDB: true,
  
   
}