const StatCard = ({
  title,
  value,
  icon: Icon,
  color = "bg-indigo-500",
}) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${color}`}
        >
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;