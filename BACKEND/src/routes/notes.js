const { Router } = require('express');
const router = Router();


const {  getNotes, createNote, getNote, updateNote, deleteNote, getAuthorNotes } = require('../controllers/notes.controller');


router.route('/')
    .get(getNotes)
    .post(createNote)

    
router.route('/:id' )
    .get(getNote)       
    .put(updateNote)
    .delete(deleteNote)

router.route('/author/:author')
        .get(getAuthorNotes)







module.exports = router;
