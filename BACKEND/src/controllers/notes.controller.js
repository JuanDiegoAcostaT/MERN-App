const notesController = {};

notesController.getNotes = (req, res, next) => res.json({ message : []});

notesController.createNote = (req, res, next) => res.json({ message : 'Saved' });

notesController.getNote = (req, res, next) => res.json({ title : 'Titulo' });

notesController.updateNote = (req, res, next) => res.json({ message : 'upDated' });

notesController.deleteNote = (req, res, next) => res.json({ message : 'Deleted' });

module.exports = notesController;