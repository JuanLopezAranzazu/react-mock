import React from "react";

const NoteContext = React.createContext({
  notes: [],
  updateNote: () => {},
});

export default NoteContext;