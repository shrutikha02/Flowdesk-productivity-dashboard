import CalendarDay from "./CalendarDay";

const weekDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const CalendarGrid = ({ currentDate, onDayClick, events, onEditEvent, }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const today = new Date();

  const cells = [];

   const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = firstDay - 1; i >=0; i--) {
    cells.push({
      day: prevMonthDays -i,
      current: false,
      isToday: false,
    });
  }

  
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year;

    cells.push({
      day,
      current: true,
      isToday,
    });
  }

  let nextDay = 1;
  while (cells.length < 42) {
    cells.push({
      day: nextDay++,
      current: false,
      isToday: false,
    });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      
      <div className="grid grid-cols-7 bg-slate-100">
        {weekDays.map((day) => (
          <div
            key={day}
            className="border-b border-slate-200 py-3 text-center font-semibold"
          >
            {day}
          </div>
        ))}
      </div>

     <div className="grid grid-cols-7">
  {cells.map((cell, index) => {

   const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
  cell.day
).padStart(2, "0")}`;

const dayEvents = events.filter(
  (event) => event.date === formattedDate
);

    return (
      <CalendarDay
        key={index}
        day={cell.day}
        isCurrentMonth={cell.current}
        isToday={cell.isToday}
        events={dayEvents}
        onClick={() => {
          if (!cell.current) return;

          onDayClick(new Date(year, month, cell.day));
        }}
        onEditEvent={onEditEvent}
      />
    );
  })}
</div>
    </div>
  );
};

export default CalendarGrid;