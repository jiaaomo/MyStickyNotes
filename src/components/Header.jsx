import React from "react";
import EventNoteIcon from "@material-ui/icons/EventNote";
import {Link} from "react-router-dom"
import { Button} from 'react-bootstrap';

function Header() {
  function reload() {
    // window.location.reload();
  }
  return (
    <header>
      <div onClick = {reload}>
      <h1 >
        <EventNoteIcon />
        <span> </span>
        Sticky Notes
      </h1>
      <Link to="/register">Register</Link>
      
      </div>
    </header>
  );
}

export default Header;
