import NoteCard from "./NoteCard";

const NotesGrid = ({
  notes,
  onEdit,
  onDelete,
  onTogglePin,
}) => {
  if (notes.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            No Notes Found
          </h3>

          <p className="mt-2 text-slate-500">
            Create your first note.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  );
};

export default NotesGrid;