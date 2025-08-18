const express = require('express')
const jwtUtils = require('../utils/jwt')
const router = express.Router()

// NOTE: Bu örnek veritabanı yok — prod'da hashed password ve DB lazım.
const USERS = [{id:1,username:'admin',password:'admin'}]

router.post('/login', (req,res)=>{
  const {username,password} = req.body
  const user = USERS.find(u=>u.username===username && u.password===password)
  if(!user) return res.status(401).json({error:'invalid'})
  const token = jwtUtils.sign({id:user.id,username:user.username})
  res.json({token})
})

module.exports = router

