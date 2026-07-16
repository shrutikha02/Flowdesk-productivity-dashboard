import Button from "../ui/Button";

const DeleteNoteModal = ({
  open,
  onClose,
  onConfirm,
  note,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-slate-900">
          Delete Note
        </h2>

        <p className="mt-3 text-slate-600">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            "{note?.title}"
          </span>
          ? This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNoteModal;