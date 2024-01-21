// JavaScript source code

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

// Ścieżka API
app.get('/api/users', async (req, res) => {
    try {
        // Wykorzystanie Axios do pobrania danych z udostępnionego API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        // Odpowiedź z pobranymi danymi
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Strona powitalna
app.get('/', (req, res) => {
    res.send('Hello, this is your server!');
});

// Uruchomienie serwera na określonym porcie
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
