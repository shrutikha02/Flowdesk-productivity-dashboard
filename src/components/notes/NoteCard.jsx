import { Pin, Pencil, Trash2 } from "lucide-react";

const colors = {
  yellow: "bg-yellow-100 border-yellow-300",
  green: "bg-green-100 border-green-300",
  blue: "bg-blue-100 border-blue-300",
  red: "bg-red-100 border-red-300",
  purple: "bg-purple-100 border-purple-300",
};

const NoteCard = ({
  note,
  onEdit,
  onDelete, onTogglePin,
}) => {
  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        colors[note.color] || "bg-white border-slate-200"
      }`}
    >
      
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">
          {note.title}
        </h3>

        {note.pinned && (
  <div className="flex items-center gap-1 rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-600">
    <Pin size={12} className="fill-current" />
    Pinned
  </div>
)}
      </div>

      
      <p className="mt-3 line-clamp-4 text-sm text-slate-700">
        {note.content}
      </p>

      
<div className="mt-6">
  <div className="flex items-center justify-between">
    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium">
      {note.category}
    </span>

    <div className="flex gap-2">
      <button
        onClick={() => onTogglePin(note.id)}
        className={`rounded-lg p-2 transition ${
          note.pinned
            ? "text-indigo-600"
            : "text-slate-400 hover:text-indigo-600"
        }`}
      >
        <Pin
          size={18}
          className={note.pinned ? "fill-current" : ""}
        />
      </button>

      <button
        onClick={() => onEdit(note)}
        className="rounded-lg p-2 hover:bg-white/60"
      >
        <Pencil size={16} />
      </button>

      <button
        onClick={() => onDelete(note)}
        className="rounded-lg p-2 text-red-600 hover:bg-red-100"
      >
        <Trash2 size={16} />
      </button>
    </div>
  </div>

 
  <div className="mt-4 text-xs text-slate-500">
    {note.createdAt}
  </div>
</div>
      
    </div>
  );
};

export default NoteCard;