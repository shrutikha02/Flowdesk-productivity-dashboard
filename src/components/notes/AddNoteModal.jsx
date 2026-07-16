import { useEffect, useState } from "react";
import Button from "../ui/Button";

const AddNoteModal = ({
  open,
  onClose,
  onSave,
  note,
  onDelete,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");
  const [color, setColor] = useState("yellow");
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategory(note.category);
      setColor(note.color);
      setPinned(note.pinned);
    } else {
      setTitle("");
      setContent("");
      setCategory("Personal");
      setColor("yellow");
      setPinned(false);
    }
  }, [note]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold">
          {note ? "Edit Note" : "New Note"}
        </h2>

        <div className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
          />

          <textarea
            rows={6}
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
          />

          <div className="grid gap-4 md:grid-cols-2">

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-slate-200 p-3"
            >
              <option>Personal</option>
              <option>Work</option>
              <option>Study</option>
              <option>Ideas</option>
            </select>

            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="rounded-xl border border-slate-200 p-3"
            >
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="purple">Purple</option>
            </select>

          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={pinned}
              onChange={(e) => setPinned(e.target.checked)}
            />
            Pin this note
          </label>

        </div>

        <div className="mt-6 flex items-center justify-between">

          {note ? (
            <Button
              variant="danger"
              onClick={() => onDelete(note)}
            >
              Delete
            </Button>
          ) : (
            <div />
          )}

          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                onSave({
                  title,
                  content,
                  category,
                  color,
                  pinned,
                });
              }}
            >
              {note ? "Update Note" : "Save Note"}
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddNoteModal;