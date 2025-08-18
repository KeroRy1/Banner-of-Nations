const express = require('express');
const path = require('path');
const app = express();

// public klasöründeki tüm statik dosyaları servis et
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Google doğrulama dosyası route'u
app.get('/googleaa1a9047867b85a7.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'googleaa1a9047867b85a7.html'));
});

// Port ayarı
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
