const express = require('express');
const cors = require('cors'); 
const app = express();


app.use(express.json());
app.use(cors());


const hardcodedUser = {
  username: 'admin',
  password: 'password123',
};


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === hardcodedUser.username && password === hardcodedUser.password) {
    console.log("Successful log");
    res.json({ success: true, message: 'Login successful', username });
  } else {
    console.log("Log Fail");
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
