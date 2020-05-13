const notesController = {};

const NoteModel = require('../models/Note');

notesController.getNotes = async (req, res, next) => {
    const notes = await NoteModel.find();
    res.json(notes);
};

notesController.createNote = async (req, res, next) => {
    const { title, content, date, author } = req.body;
    const newNote = new NoteModel ( {
        title : title,
        content : content, 
        date : date ,
        author : author
    });
    await newNote.save();
    res.json({ message : 'Saved' })
};

notesController.getNote = async (req, res, next) => {
    const note = await NoteModel.findById(req.params.id);
    res.json(note)
};

notesController.updateNote = async  (req, res, next) => {
    const { title, content , author } = req.body;
    const noteUpdated = await NoteModel.findByIdAndUpdate(req.params.id, {
        title : title,
        content : content, 
        author : author
    })
    await noteUpdated.save();
    res.json({ message : 'upDated' })
};

notesController.deleteNote = async (req, res, next) => {
    const noteDeleted = await NoteModel.findByIdAndDelete(req.params.id)
    res.json({ message : 'Note Deleted' })
};

module.exports = notesController;