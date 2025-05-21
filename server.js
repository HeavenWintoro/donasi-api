const express = require('express');
const app = express();
const path = require('path');

app.get('/api/orkut/createpayment', (req, res) => {
    const amount = req.query.amount || "0";
    const codeqr = req.query.codeqr || "NoCodeGiven";

    const transactionId = "OK-" + Math.floor(Math.random() * 100000);
    const expirationTime = new Date(Date.now() + 3600000).toISOString();

    res.json({
        status: true,
        creator: "Kamu",
        result: {
            transactionId,
            amount,
            expirationTime,
            qrImageUrl: "https://your-username.github.io/api-payment/qrku.png"
        }
    });
});

app.use('/file', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server berjalan di port " + port);
});