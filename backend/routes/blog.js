const express = require('express')
const router = express.Router()
let DB = [
  {id:1,title:'Başlangıç',slug:'baslangic',excerpt:'Oyunun temel fikirleri...',content:'...'}
]
router.get('/', (req,res)=> res.json(DB))
router.get('/:id', (req,res)=> {
  const p = DB.find(b=>b.id==req.params.id)
  if(!p) return res.status(404).json({error:'not found'})
  res.json(p)
})
module.exports = router

