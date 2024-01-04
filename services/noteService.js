// services/noteService.js

const Note = require('../models/noteModel');

async function getNotes(userId) {
  return await Note.find({ owner: userId });
}

async function getNoteById(noteId, userId) {
  return await Note.findOne({ _id: noteId, owner: userId });
}

async function createNote(title, content, userId) {
  const newNote = new Note({ title, content, owner: userId });
  await newNote.save();
}

async function updateNoteById(noteId, title, content, userId) {
  await Note.findOneAndUpdate({ _id: noteId, owner: userId }, { title, content });
}

async function deleteNoteById(noteId, userId) {
  await Note.findOneAndDelete({ _id: noteId, owner: userId });
}

async function shareNoteWithUser(noteId, userIdToShare, userId) {
  await Note.findOneAndUpdate(
    { _id: noteId, owner: userId },
    { $addToSet: { sharedWith: userIdToShare } }
  );
}

async function searchNotes(query, userId) {
  return await Note.find({
    $and: [
      { $or: [{ title: { $regex: query, $options: 'i' } }, { content: { $regex: query, $options: 'i' } }] },
      { $or: [{ owner: userId }, { sharedWith: userId }] },
    ],
  });
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
