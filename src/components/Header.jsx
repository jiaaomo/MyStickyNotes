import React from "react";
import EventNoteIcon from "@material-ui/icons/EventNote";

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
      </div>
    </header>
  );
}

export default Header;
