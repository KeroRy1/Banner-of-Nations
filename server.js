// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Health endpoint for UptimeRobot
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'banner-of-nations-site', timestamp: new Date().toISOString() });
});

// Fallback to index.html for SPA-like behavior
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Banner of Nations site running on port ${PORT}`);
});

