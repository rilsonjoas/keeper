"use client";

import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";


function CreateArea(props: { onAdd: (arg0: { title: string; content: string; }) => void; }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [collapsedArea, expandedArea] = useState(false)

  function handleChange (event: { target: { name: any; value: any; }; }) {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {...prevNote, [name]: value}
    })
  }

  function subtmitNote(event: { preventDefault: () => void; }) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expandNote(prevState: any) {
    expandedArea(true);
  }

  return (
    <div>
      <form className="create-note">
        {collapsedArea && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={collapsedArea ? 3 : 1}
          value={note.content}
          onChange={handleChange}
          onClick={expandNote}
        />
        <Zoom in={collapsedArea}>
          <Fab onClick={subtmitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
