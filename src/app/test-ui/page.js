'use client';


import React from 'react';
import { DatePicker } from 'antd';




export default function TestUI() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是:"+ dateString);

  };
  

  return (
    <div className="max-w-2xl mx-auto p-6">
      
      <DatePicker onChange={onChange} needConfirm/>
      <div>
        <div>2025</div>
        <div>五月</div>
        <div>一號</div>
        <div>星期四</div>
      </div>
      </div>
  );
}