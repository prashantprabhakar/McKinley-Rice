const bcrypt = require('bcrypt')

exports.hashPass = (pass) => {
  try {
    return new Promise((resolve) => {
      bcrypt.hash(pass, saltRounds=10, function(err, hash) {
        if(err) throw new Error("can not encrypt pass")
        else resolve(hash)
      });
    })
    
  } catch(e){
    throw new Error("can not encrypt pass")
  }
}


exports.compare = (plainPass, hash) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPass, hash, function(err, res) {
      if(err || !res) resolve(false)
      else resolve(true)
    });
  })
}

