const express = require ('express');
const path = require ('path');
const app = express();
const port = 3030;

app.use(express.static('public'));

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));

app.get ('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));




