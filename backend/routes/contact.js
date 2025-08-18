const express = require('express')
const router = express.Router()
// basit contact endpoint - gerçek projede mail gönderici (SendGrid, Mailgun vb.)
router.post('/', (req,res)=>{
  const {name,email,message} = req.body
  console.log('Contact form:', name, email, message)
  // burada db kaydet ya da mail gönder
  res.json({ok:true,message:'received'})
})
module.exports = router

