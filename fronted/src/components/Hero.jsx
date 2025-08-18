import React from 'react'
export default function Hero(){
  return (
    <div className="hero">
      <div style={{flex:1}}>
        <h1 style={{fontSize:36,margin:0}}>Banner of Nations</h1>
        <p style={{opacity:.8}}>Strateji + Gerçek zamanlı savaş. Büyük haritalar, kuşatma, politika, ekonomi.</p>
        <div style={{marginTop:20}}>
          <a className="button" href="#pricing">Satın Al</a>
        </div>
      </div>
      <div style={{flex:'0 0 360px'}}>
        <div className="card">Ekran görüntüsü / video yer tutucu</div>
      </div>
    </div>
  )
}

