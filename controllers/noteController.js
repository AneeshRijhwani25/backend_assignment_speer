
const noteService = require('../services/noteService');

async function getNotes(req, res, next) {
  const userId = req.user.userId;
  try {
    const notes = await noteService.getNotes(userId);
    res.json(notes);
  } catch (error) {
    next(error);
  }
}

async function getNoteById(req, res, next) {
  const userId = req.user.userId;
  const noteId = req.params.id;
  try {
    const note = await noteService.getNoteById(noteId, userId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    next(error);
  }
}

async function createNote(req, res, next) {
  const userId = req.user.userId;
  const { title, content } = req.body;
  try {
    await noteService.createNote(title, content, userId);
    res.status(201).json({ message: 'Note created successfully' });
  } catch (error) {
    next(error);
  }
}

async function updateNoteById(req, res, next) {
  const userId = req.user.userId;
  const noteId = req.params.id;
  const { title, content } = req.body;
  try {
    await noteService.updateNoteById(noteId, title, content, userId);
    res.json({ message: 'Note updated successfully' });
  } catch (error) {
    next(error);
  }
}

async function deleteNoteById(req, res, next) {
  const userId = req.user.userId;
  const noteId = req.params.id;
  try {
    await noteService.deleteNoteById(noteId, userId);
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    next(error);
  }
}

async function shareNoteWithUser(req, res, next) {
  const userId = req.user.userId;
  const noteId = req.params.id;
  const { userIdToShare } = req.body;
  try {
    await noteService.shareNoteWithUser(noteId, userIdToShare, userId);
    res.json({ message: 'Note shared successfully' });
  } catch (error) {
    next(error);
  }
}

async function searchNotes(req, res, next) {
  const userId = req.user.userId;
  const { q } = req.query;
  try {
    const notes = await noteService.searchNotes(q, userId);
    res.json(notes);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNoteById,
  deleteNoteById,
  shareNoteWithUser,
  searchNotes,
};
