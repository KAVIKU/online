const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/process-payment', async (req, res) => {
  const { orderDetails, totalPrice, customerPhone } = req.body;

  const consumerKey = 'YOUR_CONSUMER_KEY';
  const consumerSecret = 'YOUR_CONSUMER_SECRET';
  const shortCode = 'YOUR_SHORTCODE';
  const passkey = 'YOUR_PASSKEY';
  const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
  const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');

  try {
    // Get access token
    const { data: authData } = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      auth: {
        username: consumerKey,
        password: consumerSecret,
      },
    });

    // Make STK push request
    const { data: stkResponse } = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: totalPrice,
        PartyA: customerPhone,
        PartyB: shortCode,
        PhoneNumber: customerPhone,
        CallBackURL: 'YOUR_CALLBACK_URL',
        AccountReference: 'Book Haven',
        TransactionDesc: 'Order Payment',
      },
      { headers: { Authorization: `Bearer ${authData.access_token}` } }
    );

    res.json({ success: true, transactionId: stkResponse.CheckoutRequestID });
  } catch (error) {
    console.error('Payment error:', error.response ? error.response.data : error.message);
    res.json({ success: false, error: error.response ? error.response.data.errorMessage : 'An error occurred' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
