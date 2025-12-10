const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/v1/cryptocurrency/quotes/latest', (req, res) => {
    const response = {
        "data": {
            "9999": {
                "id": 9999,
                "name": "Fake USD Token",
                "symbol": "FAKE-USDT",
                "quote": {
                    "USD": {
                        "price": 1.00,
                        "last_updated": new Date().toISOString()
                    }
                }
            }
        }
    };
    res.json(response);
});

app.get('/price/:address', (req, res) => {
    res.json({
        address: req.params.address,
        price: 1.00,
        symbol: "FAKE",
        updated: new Date().toISOString()
    });
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Fake Price API</title></head>
        <body>
            <h1>Fake Price API</h1>
            <p>University Research Project - Fake price feed simulation</p>
            <p><strong>Endpoints:</strong></p>
            <ul>
                <li><a href="/v1/cryptocurrency/quotes/latest">/v1/cryptocurrency/quotes/latest</a></li>
                <li><a href="/price/0x123">/price/0x123</a></li>
            </ul>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
