import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Register from "./auth/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Router>
        <Header />
        <Switch>


          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })}
          </Route>

        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
