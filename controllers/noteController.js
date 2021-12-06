const generator = require("../util/generator");
const memoryStorage = require("../util/memoryStorage");
const model = require("../models/noteModel");
const { json } = require("express");

exports.getAllNotes = (req, res, next) => {
  // let seqId = generator.generate();
  // memoryStorage.store.setItem(seqId, "1st_key");
  // let seqId2 = generator.generate();
  // memoryStorage.store.setItem(seqId2, "2nd_key");

  // let keys = memoryStorage.getKeys(memoryStorage.store);
  // let values = memoryStorage.getValues(memoryStorage.store);
  // const Note = model.Note;
  // const noteObj = new Note(seqId, "ccc", "sss", "ddd", new Date());
  // res.send("get all notes ... KEYS ... " + JSON.stringify(noteObj));
  // // res.send("get all notes ... values ... " + JSON.stringify(values));

  let values = memoryStorage.getValues(memoryStorage.store);
  return res.status(200).send(JSON.stringify(values));
};

exports.saveNote = (req, res, next) => {
  try {
  } catch (e) {}
  let seqId = generator.generate();
  let createdBy = "admin";
  let createdOn = new Date();
  let title = req.body.title;
  let content = req.body.content;
  if (!title || !content)
    return res
      .status(500)
      .send({ error: "Title and content shouldn't be empty" });

  res.status(201).send("succesfully saved note");
};

exports.updateNote = (req, res, next) => {
  let createdBy = "admin";
  let createdOn = new Date();
  let title = req.body.title;
  let content = req.body.content;
  let noteId = req.body.noteId;
  if (!title || !content || !noteId)
    return res
      .status(500)
      .send({ error: "Title, noteId and content shouldn't be empty" });

  let noteItem = memoryStorage.store.getItem(noteId);
  if (!noteItem) return res.status(500).send({ error: "error" });

  const Note = model.Note;
  const noteObj = new Note(noteId, title, content, createdBy, createdOn);
  memoryStorage.store.setItem(noteId, noteObj);
  res.status(200).send("succesfully updated note");
};

exports.deleteNote = (req, res, next) => {
  let noteId = req.params.noteId;
  if (!noteId)
    return res.status(500).send({ error: "noteId shouldn't be empty" });

  let noteItem = memoryStorage.store.getItem(noteId);
  if (!noteItem) return res.status(500).send({ error: "error" });

  memoryStorage.store.removeItem(noteId);
  return res.status(200).send("deleted the item");
};
