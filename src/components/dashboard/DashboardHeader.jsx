const DashboardHeader = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Stay focused and keep making progress today.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
        <p className="text-sm text-slate-500">
          Today
        </p>

        <p className="font-semibold">
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;