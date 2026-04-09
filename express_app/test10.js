const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router specific middleware');
  next();
});

router.get('/user/:id', (req, res) => {
  res.send(`User profile for ID: ${req.params.id}`);
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});