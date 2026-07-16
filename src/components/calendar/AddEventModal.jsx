import Button from "../ui/Button";
import { useState, useEffect } from "react";

const AddEventModal = ({ open, onClose, selectedDate, onSave, event, onDelete, }) => {
  
 const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("Medium");

useEffect(() => {
  if (event) {
    setTitle(event.title);
    setDate(event.date);
    setTime(event.time);
    setDescription(event.description);
    setPriority(event.priority);
  } else if (selectedDate) {
    setTitle("");
    setDate(selectedDate.toISOString().split("T")[0]);
    setTime("");
    setDescription("");
    setPriority("Medium");
  }
}, [event, selectedDate]);
if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

       <h2 className="text-2xl font-bold">
  {event ? "Edit Event" : "Add Event"}
  </h2>

        <div className="mt-6 space-y-4">

          <input
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Event title"
  className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
  />

          <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
  />
    <input
  type="time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
  className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
  />
      <select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>   

         <textarea
  rows={4}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Description"
  className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-indigo-500"
  />

        </div>

        <div className="mt-6 flex items-center justify-between">
  <Button
    variant="secondary"
    onClick={onClose}
  >
    Cancel
  </Button>

  <div className="flex items-center gap-3">
    {event ? (
      <>
        <Button
          variant="danger"
          onClick={() => onDelete(event.id)}
        >
          Delete
        </Button>

        <Button
          onClick={() => {
            onSave({
              title,
              date,
              time,
              description,
              priority,
            });
          }}
        >
          Update Event
        </Button>
      </>
    ) : (
      <Button
        onClick={() => {
          onSave({
            title,
            date,
            time,
            description,
            priority,
          });
        }}
      >
        Save Event
      </Button>
    )}
  </div>
</div>
</div>
      </div>
  );
};

export default AddEventModal;