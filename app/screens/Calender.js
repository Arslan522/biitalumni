import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

export default function Calender() {
    const [selectedDate, setSelectedDate] = useState('');
    return (
        <DatePicker
            onSelectedChange={date => setSelectedDate(date)}
        />
    );
};