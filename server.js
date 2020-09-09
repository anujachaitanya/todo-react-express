const { app } = require('./src/app');
const PORT = process.env.PORT || 3001;
const fs = require('fs');

app.listen(PORT, () => console.log('app is listening to 3001'));
