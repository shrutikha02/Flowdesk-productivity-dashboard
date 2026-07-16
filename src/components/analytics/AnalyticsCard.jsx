const AnalyticsCard = ({
  title,
  value,
  icon,
  color = "bg-indigo-500",
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`rounded-xl p-4 text-white ${color}`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
};

export default AnalyticsCard;