const base = process.env.PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com';

// Function to fetch the exchange rate
async function getExchangeRate() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/INR');
  const data = await response.json();
  if (data.rates && data.rates.USD) {
    return data.rates.USD;
  }
  throw new Error('Unable to fetch exchange rate');
}

export const paypal = {
  createOrder: async function createOrder(priceInINR: number) {
    const exchangeRate = await getExchangeRate();
    const priceInUSD = (priceInINR * exchangeRate).toFixed(2); // Convert INR to USD
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: priceInUSD,
            },
          },
        ],
      }),
    });
    return handleResponse(response);
  },
  capturePayment: async function capturePayment(orderId: string) {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderId}/capture`;
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return handleResponse(response);
  },
};

async function generateAccessToken() {
  const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET } = process.env;
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ':' + PAYPAL_APP_SECRET).toString(
    'base64'
  );
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'post',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const jsonData = await handleResponse(response);
  return jsonData.access_token;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleResponse(response: any) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}
