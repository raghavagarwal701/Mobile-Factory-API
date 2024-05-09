const express = require('express');
const app = express();

const MobileFactory = require('./MobileFactory');

app.use(express.json());

app.post('/orders', (req, res) => {
    const { components } = req.body;

    if (!components || !Array.isArray(components) || components.length !== 5) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const factory = new MobileFactory();
    const order = factory.createOrder(components);

    if (order.error) {
        return res.status(400).json({ error: order.error });
    }

    return res.status(201).json({
        order_id: 'some-id',
        total: order.total,
        parts: order.parts
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
