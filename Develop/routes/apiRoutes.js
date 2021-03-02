const fs = require("fs");
const express = require("express");
const path = require("path");

module.exports = function(app) {
app.get("/api/notes", function(req, res) {
        res.json(data);
    });

app.get("/api/notes", function(req, res) {
    res.json(notes);
});

app.post("/api/notes", function(req, res){
    let newNote =req.body;
    notes.push(newNote);
    updateDb();
    return console.log("added new note: "+newNote.title);
});

app.get("/api/notes/:id", function(req, res) {
    res.json(notes[req.params.id]);
});

app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("deleted note"+params.id);
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes, "\t"), err=> {
        if (err) throw err;
        return true;
    })};
}