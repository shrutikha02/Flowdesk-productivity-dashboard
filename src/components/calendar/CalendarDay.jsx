const CalendarDay = ({
  day,
  isCurrentMonth,
  isToday,
  events = [],
  onClick,
   onEditEvent,
}) => {
  return (
    <div
      onClick={onClick}
      className={`min-h-[120px] cursor-pointer border border-slate-200 p-2 transition-all duration-200 hover:bg-slate-50
      ${
        isCurrentMonth
          ? "bg-white"
          : "bg-slate-100 text-slate-400"
      }`}
    >
      {/* Date */}
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold
        ${
          isToday
            ? "bg-indigo-600 text-white shadow-md"
            : ""
        }`}
      >
        {day}
      </div>

        {/* Events */}
<div className="mt-2 space-y-1">
  {events.slice(0, 2).map((event) => (
    <div
  key={event.id}
  onClick={(e) => {
    e.stopPropagation();
    alert("Event clicked!");
    onEditEvent(event);
  }}
  className={`cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-white ${
    event.priority === "High"
      ? "bg-red-500"
      : event.priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500"
  }`}
>
  {event.time && (
    <div className="text-[10px] opacity-80">
      {event.time}
    </div>
  )}

  <div className="truncate">
    {event.title}
  </div>
</div>

  ))}

  {events.length > 2 && (
    <div className="text-xs text-slate-500">
      +{events.length - 2} more
    </div>
  )}
</div>
    </div>
  );
};

export default CalendarDay;