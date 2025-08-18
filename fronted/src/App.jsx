import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import BlogList from './components/BlogList'
import ContactForm from './components/ContactForm'
import AdminPanel from './components/AdminPanel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <main>
        <section className="section"><div className="container"><Hero/></div></section>
        <section className="section"><div className="container"><Features/></div></section>
        <section className="section"><div className="container"><Pricing/></div></section>
        <section className="section"><div className="container"><Roadmap/></div></section>
        <section className="section"><div className="container"><BlogList/></div></section>
        <section className="section"><div className="container"><ContactForm/></div></section>
      </main>

      <Routes>
        <Route path="/admin" element={<AdminPanel/>}/>
        <Route path="*" element={null}/>
      </Routes>

      <footer className="footer">© {new Date().getFullYear()} Banner of Nations</footer>
    </BrowserRouter>
  )
}

