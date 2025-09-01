// DeliveredOn.js
import React, { useState, useRef, useEffect } from 'react';

const DeliveredOn = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const formatDate = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours() % 12;
    hours = hours === 0 ? 12 : hours;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${month}/${day}/${year} ${hours}:${minutes} ${amPm}`;
  };

  const [displayValue, setDisplayValue] = useState(formatDate(new Date()));

  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());
  const [viewYear, setViewYear] = useState(selectedDate.getFullYear());

  const [hour, setHour] = useState(selectedDate.getHours() % 12 || 12);
  const [minute, setMinute] = useState(selectedDate.getMinutes());
  const [amPm, setAmPm] = useState(selectedDate.getHours() >= 12 ? 'PM' : 'AM');

  useEffect(() => {
    setHour(selectedDate.getHours() % 12 || 12);
    setMinute(selectedDate.getMinutes());
    setAmPm(selectedDate.getHours() >= 12 ? 'PM' : 'AM');
    setViewMonth(selectedDate.getMonth());
    setViewYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const changeMonth = (delta) => {
    let newMonth = viewMonth + delta;
    let newYear = viewYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setViewMonth(newMonth);
    setViewYear(newYear);
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDayClick = (day) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(viewYear);
    newDate.setMonth(viewMonth);
    newDate.setDate(day);
    setSelectedDate(newDate);
    setDisplayValue(formatDate(newDate));
    // Dropdown remains open for time adjustment
  };

  const handleApply = () => {
    const newDate = new Date(selectedDate);
    let h = hour;
    if (amPm === 'PM' && h < 12) h += 12;
    if (amPm === 'AM' && h === 12) h = 0;
    newDate.setHours(h);
    newDate.setMinutes(minute);
    setSelectedDate(newDate);
    setDisplayValue(formatDate(newDate));
    setShowDropdown(false);
  };

  const renderDays = () => {
    const days = [];
    const firstDay = firstDayOfMonth(viewYear, viewMonth);
    const numDays = daysInMonth(viewYear, viewMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`blank-${i}`} className="calendar-day blank" />);
    }

    for (let d = 1; d <= numDays; d++) {
      const isSelected =
        d === selectedDate.getDate() &&
        viewMonth === selectedDate.getMonth() &&
        viewYear === selectedDate.getFullYear();
      days.push(
        <div
          key={d}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDayClick(d)}
        >
          {d}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="form-control input-control">
      <label htmlFor="input-input_Delivered on" id="input-label_Delivered on">
        Delivered on
      </label>
      <div className="input-field">
        <input
          aria-invalid="false"
          autoComplete="off"
          id="input-input_Delivered on"
          type="text"
          value={displayValue}
          onFocus={handleInputFocus}
          onBlur={handleBlur}
          readOnly
        />
        {/* Optional: Add dropdown icon if bootstrap-icons is installed */}
        {/* <i className="bi bi-chevron-down" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i> */}
        <div
          className="date-dropdown-container"
          style={{ display: showDropdown ? 'block' : 'none' }}
          ref={dropdownRef}
        >
          <div className="calendar-header" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
            <button onClick={() => changeMonth(-1)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>&lt;</button>
            <span>{monthNames[viewMonth]} {viewYear}</span>
            <button onClick={() => changeMonth(1)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>&gt;</button>
          </div>
          <div
            className="calendar-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1px',
              padding: '8px'
            }}
          >
            {weekDays.map((day) => (
              <div key={day} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
          <div
            className="time-select"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', gap: '5px' }}
          >
            <select value={hour} onChange={(e) => setHour(parseInt(e.target.value))}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            :
            <select value={minute} onChange={(e) => setMinute(parseInt(e.target.value))}>
              {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                <option key={m} value={m}>
                  {m.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            <select value={amPm} onChange={(e) => setAmPm(e.target.value)}>
              <option>AM</option>
              <option>PM</option>
            </select>
            <button
              onClick={handleApply}
              style={{ backgroundColor: 'var(--navy-blue)', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveredOn;