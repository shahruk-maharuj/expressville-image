const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const welcomeMessage = process.env.WELCOME_MESSAGE || "Welcome to ExpressVille!";
    res.send(welcomeMessage);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
