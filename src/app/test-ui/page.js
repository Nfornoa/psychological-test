'use client';


import React from 'react';
import { DatePicker } from 'antd';




export default function TestUI() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是:"+ dateString);

  };
  

  return (
    <div className="max-w-2xl mx-auto p-6 gap-4 flex-col overflow-x-auto">
      {/* <DatePicker onChange={onChange} needConfirm/> */}


        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 01 </div>
          <div className='text-[60px]'> 星期四 </div>
        </div>

        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 02 </div>
          <div className='text-[60px]'> 星期五 </div>
        </div>


        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 03 </div>
          <div className='text-[60px]'> 星期六 </div>
        </div>


        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 04 </div>
          <div className='text-[60px]'> 星期日 </div>
        </div>

        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 05 </div>
          <div className='text-[60px]'> 星期一一 </div>
        </div>

        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 06 </div>
          <div className='text-[60px]'> 星期二 </div>
        </div>

        <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 07 </div>
          <div className='text-[60px]'> 星期三 </div>
        </div>

        
      </div>
     
  );
}