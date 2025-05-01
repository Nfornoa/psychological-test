'use client';


import React from 'react';
import { DatePicker } from 'antd';
import CalendarPage from '../component/CalendarPage'



export default function TestUI() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是:"+ dateString);

  };
  

  return (
    <div className="w-screen h-screen flex items-center justify-center gap-4 flex-wrap overflow-auto">
      {/* <DatePicker onChange={onChange} needConfirm/> */}
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>
      <CalendarPage year="2025" month="5" day="01" weekday="星期四" ></CalendarPage>



        
      </div>
     
  );
}