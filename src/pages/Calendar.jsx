import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarToolbar from "../components/calendar/CalendarToolbar";
import CalendarGrid from "../components/calendar/CalendarGrid";
import AddEventModal from "../components/calendar/AddEventModal";
import Button from "../components/ui/Button";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("flowdesk-events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  
  useEffect(() => {
    localStorage.setItem(
      "flowdesk-events",
      JSON.stringify(events)
    );
  }, [events]);

  
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

 
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };


  const handleDayClick = (date) => {
    setEditingEvent(null);
    setSelectedDate(date);
    setIsModalOpen(true);
        
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setSelectedDate(new Date(event.date));
    setIsModalOpen(true);
  
  };

  
  const handleSaveEvent = (eventData) => {
  if (editingEvent) {
    setEvents((prev) =>
      prev.map((item) =>
        item.id === editingEvent.id
          ? {
              ...item,
              ...eventData,
            }
          : item
      )
    );
    toast.success("Event updated successfully!");
  } else {
    setEvents((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...eventData,
      },
    ]);
    toast.success("Event created successfully");
  }

  setEditingEvent(null);
  setSelectedDate(null);
  setIsModalOpen(false);
};


  const handleDeleteEvent = (id) => {
  setEvents((prev) =>
    prev.filter((event) => event.id !== id)
  );

  setEditingEvent(null);
  setSelectedDate(null);
  setIsModalOpen(false);
  toast.success("Event deleted successfully!");
};
  
  return (
    <div className="space-y-8">
      <CalendarHeader
       onAddEvent={() => {
    setEditingEvent(null);
    setSelectedDate(new Date());
    setIsModalOpen(true);
  }}
      />

      <CalendarToolbar
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <CalendarGrid
        currentDate={currentDate}
        onDayClick={handleDayClick}
        events={events}
        onEditEvent={handleEditEvent}
      />

      <AddEventModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDate(null);
          setEditingEvent(null);
          
        }}
        selectedDate={selectedDate}
        event={editingEvent}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />

     
    </div>
  );
};

export default Calendar;