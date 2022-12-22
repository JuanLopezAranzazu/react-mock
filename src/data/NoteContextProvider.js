import React, { useState } from "react";
// context
import NoteContext from "./NoteContext";

const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: 1, text: "text1", checked: false },
    { id: 2, text: "text2", checked: true },
  ]);

  const updateNote = (id, checked) => {
    setNotes((current) => {
      const updatedNotes = [...current];
      const selectedIndex = notes.findIndex((item) => item.id === id);
      const updatedNote = { ...updatedNotes[selectedIndex], checked };
      updatedNotes[selectedIndex] = updatedNote;
      return updatedNotes;
    });
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
