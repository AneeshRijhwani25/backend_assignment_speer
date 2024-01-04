// middleware/noteMiddleware.js

const Note = require('../models/noteModel');

async function checkNoteOwnership(req, res, next) {
  const { id } = req.params;
  const userId = req.user.userId;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (note.owner.toString() !== userId && !note.sharedWith.includes(userId)) {
      return res.status(403).json({ message: 'Forbidden - You do not have access to this note' });
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { checkNoteOwnership };
