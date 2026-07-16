import { Plus } from "lucide-react";
import Button from "../ui/Button";

const NotesHeader = ({ onAddNote }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Notes
        </h1>

        <p className="mt-2 text-slate-500">
          Capture ideas, reminders and important information.
        </p>
      </div>

      <Button
        onClick={onAddNote}
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        New Note
      </Button>
    </div>
  );
};

export default NotesHeader;