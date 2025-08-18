import React from 'react'
export default function Header(){
  return (
    <header className="container header" role="banner">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:44,height:44,background:'#073',borderRadius:8}} />
        <strong>Banner of Nations</strong>
      </div>
      <nav>
        <a className="button" href="#contact">İletişim</a>
      </nav>
    </header>
  )
}

