import { useState, useEffect, type FC } from 'react';
import moment from 'moment';
import 'moment/locale/ja';

type DatePickerProps = {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
};

const DatePicker: FC<DatePickerProps> = ({ currentDate, setCurrentDate }) => {
  moment.locale('ja');
  
  const [days, setDays] = useState<moment.Moment[]>([]);
  const [inputDate, setInputDate] = useState<string>(moment(currentDate).format('YYYY-MM-DD'));

  useEffect(() => {
    const startDay = moment(currentDate).subtract(3, 'days'); // 今日の日付を中央に設定
    const tempDays = Array.from({ length: 7 }, (_, i) => moment(startDay).add(i, 'days'));
    setDays(tempDays);
  }, [currentDate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const handleInputSubmit = () => {
    const newDate = moment(inputDate, 'YYYY-MM-DD');
    if (newDate.isValid()) {
      setCurrentDate(newDate.toDate());
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 0',
        }}
      >
        {days.map(day => (
          <div
            key={day.format('YYYY-MM-DD')}
            id={day.format('YYYY-MM-DD')}
            style={{
              display: 'inline-block',
              width: '70px',
              textAlign: 'center',
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '50%',
              margin: '0 5px',
              boxSizing: 'border-box',
            }}
            onClick={() => setCurrentDate(day.toDate())}
          >
            <div>{day.format('dd')}</div>
            <div
              style={{
                backgroundColor: day.isSame(currentDate, 'day') ? 'red' : 'transparent',
                color: day.isSame(currentDate, 'day') ? 'white' : 'black',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                margin: '0 auto',
              }}
            >
              {day.date()}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <input
          type="date"
          value={inputDate}
          onChange={handleInputChange}
          style={{ padding: '5px', fontSize: '16px' }}
        />
        <button onClick={handleInputSubmit} style={{ padding: '5px 10px', marginLeft: '10px', fontSize: '16px' }}>
          検索
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
