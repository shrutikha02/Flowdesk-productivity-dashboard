import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteNoteModal from "../components/notes/DeleteNoteModal";
import { notes as initialNotes } from "../data/notes";

import NotesHeader from "../components/notes/NotesHeader";
import NotesToolbar from "../components/notes/NotesToolbar";
import NotesGrid from "../components/notes/NotesGrid";
import AddNoteModal from "../components/notes/AddNoteModal";

const Notes = () => {
  
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("flowdesk-notes");
    return saved ? JSON.parse(saved) : initialNotes;
  });

  
  const [search, setSearch] = useState("");

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "flowdesk-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const handleDeleteNote = (note) => {
  setIsModalOpen(false);
  setEditingNote(null);

  setSelectedNote(note);
  setIsDeleteModalOpen(true);
};

 const confirmDeleteNote = () => {
  setNotes((prev) =>
    prev.filter((note) => note.id !== selectedNote.id)
  );

  toast.success("Note deleted!");

  setSelectedNote(null);
  setIsDeleteModalOpen(false);
};
  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };
const handleNewNote = () => {
  setEditingNote(null);
  setIsModalOpen(true);
};
 
  const handleSaveNote = (noteData) => {
    if (editingNote) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                ...noteData,
              }
            : note
        )
      );

      toast.success("Note updated!");
    } else {
      setNotes((prev) => [
        {
          id: crypto.randomUUID(),
          createdAt: new Date()
            .toISOString()
            .split("T")[0],
          ...noteData,
        },
        ...prev,
      ]);

      toast.success("Note created!");
    }

    setEditingNote(null);
    setIsModalOpen(false);
  };



const handleTogglePin = (id) => {
  setNotes((prev) =>
    prev.map((note) =>
      note.id === id
        ? {
            ...note,
            pinned: !note.pinned,
          }
        : note
    )
  );

  toast.success("Pin updated!");
};
  
const filteredNotes = [...notes]
  .filter((note) => {
    const query = search.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query) ||
      note.category.toLowerCase().includes(query)
    );
  })
  .sort((a, b) => Number(b.pinned) - Number(a.pinned));
   

    

  return (
    <div className="space-y-8">
      <NotesHeader onAddNote={handleNewNote} />

      <NotesToolbar
        search={search}
        setSearch={setSearch}
      />

      <NotesGrid
        notes={filteredNotes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
        onTogglePin={handleTogglePin}
      />

      <AddNoteModal
        open={isModalOpen}
        onClose={() => {
          setEditingNote(null);
          setIsModalOpen(false);
        }}
        note={editingNote}
        onSave={handleSaveNote}
        onDelete={handleDeleteNote}
      />
      <DeleteNoteModal
  open={isDeleteModalOpen}
  note={selectedNote}
  onClose={() => {
    setSelectedNote(null);
    setIsDeleteModalOpen(false);
  }}
  onConfirm={confirmDeleteNote}
/>
    </div>
  );
};

export default Notes;