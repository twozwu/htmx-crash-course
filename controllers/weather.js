
// Handle POST request for temp conversion
// app.post('/convert', (req, res) => {
export const convert = (req, res) => {
    setTimeout(() => {
        const fahrenheit = parseFloat(req.body.fahrenheit);
        const celsius = (fahrenheit - 32) * (5 / 9);

        res.send(`
        <p>
          ${fahrenheit} degrees Farenheit is equal to ${celsius} degrees Celsius
        </p>
      `);
    }, 2000);
};

let counter = 0;

// Handle GET request for polling example
//   app.get('/poll', (req, res) => {
export const poll = (req, res) => {
    counter++;

    const data = { value: counter };

    res.json(data);
};

let currentTemperature = 20;

// Handle GET request for weather
// app.get('/get-temperature', (req, res) => {
export const getTemperature = (req, res) => {
    currentTemperature += Math.random() * 2 - 1; // Random temp change
    res.send(currentTemperature.toFixed(1) + '°C');
};