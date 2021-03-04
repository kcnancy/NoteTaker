const fs = require("fs");
const express = require("express");
const path = require("path");

module.exports = function(app) {
app.get("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf-8", function(err, data){
        if (err) throw err
        var notes = JSON.parse(data);
            res.json(notes);
        })
    });

app.post("/api/notes", function(req, res){
    let newNote =req.body;
    fs.readFile("./db/db.json", "utf-8", function(err, data){
        if (err) throw err
        var notes = JSON.parse(data);
        notes.push(newNote); 
        notes = JSON.stringify(notes);
        fs.writeFile("./db/db.json", notes, function(err){
            if (err) throw err
        })
            
        })
    res.json(newNote);
    
});

app.get("/api/notes/:id", function(req, res) {
    res.json(notes[req.params.id]);
});

app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("deleted note"+params.id);
});

function updateDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes, "\t"), err=> {
        if (err) throw err;
        return true;
    })};
}