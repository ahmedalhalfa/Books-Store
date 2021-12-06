const express = require("express");
const controller = require("../controllers/noteController");

const router = express.Router();

router.get("/notes", controller.getAllNotes);
router.post("/notes/save", controller.saveNote);
router.put("/notes/update", controller.updateNote);
router.delete("/notes/delete/:noteId", controller.deleteNote);

module.exports = router;
