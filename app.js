import express from 'express';

const app = express();
const PORT =  3000;

// Routes
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});