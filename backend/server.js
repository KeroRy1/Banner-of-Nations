require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contact')
const blogRoutes = require('./routes/blog')
const healthRoutes = require('./routes/health')

const app = express()
app.use(helmet())
app.use(cors({origin: process.env.FRONTEND_URL || '*'}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/blog', blogRoutes)
app.use('/health', healthRoutes)

// sitemap + robots (simple static)
app.get('/sitemap.xml', (req,res)=>{
  res.type('application/xml')
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>${process.env.SITE_URL || 'https://your-site.onrender.com'}</loc></url>
  </urlset>`)
})

const port = process.env.PORT || 4000
app.listen(port, ()=>console.log('Server listening on', port))

