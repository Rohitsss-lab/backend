const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.json({
    service: 'backend',
    version: require('../package.json').version,
    status: 'running',
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});
