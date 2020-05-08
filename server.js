const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'Welcome to your journey api!'}))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/entries', require('./routes/entries'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));