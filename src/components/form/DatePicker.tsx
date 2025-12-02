'use client';

import { CalendarDays } from 'lucide-react';
import { useRef, useState } from 'react';

interface DatePickerProps {
  register: any;
  todayDate: string;
  onChange: (value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ register, todayDate, onChange }) => {
  const hiddenRef = useRef<HTMLInputElement>(null);
  const [displayDate, setDisplayDate] = useState('');

  const openPicker = () => {
    hiddenRef.current?.showPicker?.(); // safe call
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [yyyy, mm, dd] = e.target.value.split('-');
    setDisplayDate(`${dd}-${mm}-${yyyy}`);
    onChange(e.target.value);
  };

  return (
    <div className="relative w-full cursor-pointer">
      {/* Styled visible input */}
      <input
        type="text"
        value={displayDate}
        placeholder="dd-mm-yyyy"
        readOnly
        onClick={openPicker}
        className="w-full p-3 pr-10 rounded border border-[#ffc42d] bg-black 
        text-white text-base placeholder-gray-400 focus:outline-none focus:border-[#ffc42d]"
      />

      {/* Calendar Icon (clickable now) */}
      <CalendarDays
        onClick={openPicker}
        className="absolute right-3 top-1/2 -translate-y-1/2 
        text-yellow-400 cursor-pointer h-7 w-7"
        aria-label="Open date picker"
      />

      {/* Hidden native date input */}
      <input
        ref={hiddenRef}
        type="date"
        min={todayDate}
        {...register}
        onChange={handleChange}
        className="absolute inset-0 opacity-0 cursor-pointer right-0 w-full h-full p-[15px]"
      />
    </div>
  );
};

export default DatePicker;
