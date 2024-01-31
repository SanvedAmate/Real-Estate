import User from './models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword= bcryptjs.hashSync (password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();

    // Respond with a success message and details about the newly created user
    res.status(201).json({
      message: 'User Created',
      user: {
        id: newUser._id, // Assuming MongoDB ObjectId
        username: newUser.username,
        email: newUser.email,
        // Add more fields as needed
      },
    });
  } catch (error) {
    // Handle any errors that occurred during user creation or saving
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
