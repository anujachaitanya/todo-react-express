const { app } = require('./src/app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('app is listening to 3001'));
