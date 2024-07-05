'use client';

import { useState, type FC } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useRouter } from 'next/navigation';
import moment from 'moment';

import DatePicker from './DatePicker';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './toolbar.css';

const localizer = momentLocalizer(moment);

type Props = {
  schedules: {
    id: number;
    title: string;
    start: Date;
    end: Date;
  }[]
};

const MyCalendar: FC<Props> = ({ schedules }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(schedules);
  const router = useRouter();
  const now = new Date();

  const handleSelectEvent = (event: { id: number }) => {
    router.push(`/driver/schedule/${event.id}`);
  };

  return (
    <div style={{ position: 'relative' }}>
      <DatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        views={['day']}
        date={currentDate}
        onNavigate={date => setCurrentDate(date)}
        scrollToTime={now}
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default MyCalendar;
