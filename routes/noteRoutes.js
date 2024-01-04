const express = require('express');
const noteController = require('../controllers/noteController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');
const { checkNoteOwnership } = require('../middleware/noteMiddleware');

const router = express.Router();

router.use(authenticationMiddleware);

router.get('/', noteController.getNotes);
router.get('/:id', checkNoteOwnership, noteController.getNoteById);
router.post('/', noteController.createNote);
router.put('/:id', checkNoteOwnership, noteController.updateNoteById);
router.delete('/:id', checkNoteOwnership, noteController.deleteNoteById);
router.post('/:id/share', checkNoteOwnership, noteController.shareNoteWithUser);
router.get('/search', noteController.searchNotes);

module.exports = router;
