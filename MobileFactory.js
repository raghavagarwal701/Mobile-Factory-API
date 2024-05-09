class MobileFactory {
    constructor() {
        this.prices = {
            'A': 10.28, 'B': 24.07, 'C': 33.30,
            'D': 25.94, 'E': 32.39, 'F': 18.77,
            'G': 15.13, 'H': 20.00, 'I': 42.31,
            'J': 45.00, 'K': 45.00, 'L': 30.00
        };

        this.components = {
            'A': 'LED Screen', 'B': 'OLED Screen', 'C': 'AMOLED Screen',
            'D': 'Wide-Angle Camera', 'E': 'Ultra-Wide-Angle Camera',
            'F': 'USB-C Port', 'G': 'Micro-USB Port', 'H': 'Lightning Port',
            'I': 'Android OS', 'J': 'iOS OS', 'K': 'Metallic Body', 'L': 'Plastic Body'
        };
    }

    createOrder(componentCodes) {
        const parts = [];
        let total = 0;

        for (const code of componentCodes) {
            if (this.prices[code]) {
                parts.push(this.components[code]);
                total += this.prices[code];
            } else {
                return { error: 'Invalid component code' };
            }
        }

        if (parts.length !== 5) {
            return { error: 'Order must contain exactly one part of Screen, Camera, Port, OS and Body' };
        }

        return { total: total.toFixed(2), parts };
    }
}

module.exports = MobileFactory;