const authService = require('../services/authService');

async function signup(req, res, next) {
  const { username, password } = req.body;
  try {
    await authService.signup(username, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { username, password } = req.body;
  try {
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { signup, login };
