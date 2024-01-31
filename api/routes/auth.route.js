import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
  
  console.log('Received JSON data:', req.body);

  // Extract signup data from req.body
  const { username, email, password } = req.body;

  // Your signup logic here
  // Save user to the database, perform validation, etc.

  // Respond with a success message
  res.json({ message: 'Signup successful' });
});

export default router;
