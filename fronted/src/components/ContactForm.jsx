import React, {useState} from 'react'
import axios from 'axios'

export default function ContactForm(){
  const [s, setS] = useState({name:'',email:'',message:''})
  const [status, setStatus] = useState('')
  async function send(e){
    e.preventDefault()
    setStatus('Gönderiliyor...')
    try{
      await axios.post(`${import.meta.env.VITE_API_BASE || ''}/api/contact`, s)
      setStatus('Gönderildi, teşekkürler!')
      setS({name:'',email:'',message:''})
    }catch(err){
      setStatus('Gönderim hatası')
    }
  }
  return (
    <div id="contact">
      <h2>İletişime Geç</h2>
      <form onSubmit={send} style={{display:'grid',gap:10,maxWidth:600}}>
        <input required placeholder="İsim" value={s.name} onChange={e=>setS({...s,name:e.target.value})}/>
        <input required type="email" placeholder="E-posta" value={s.email} onChange={e=>setS({...s,email:e.target.value})}/>
        <textarea required placeholder="Mesaj" value={s.message} onChange={e=>setS({...s,message:e.target.value})}/>
        <button className="button" type="submit">Gönder</button>
        <div>{status}</div>
      </form>
    </div>
  )
}

