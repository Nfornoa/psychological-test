'use client';




export default function CalendarPage({year, month, day, weekday}) {

  return (
    <>
     <div className='relative bg-gray-500 w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col'>
          <div className='absolute top-4 left-4'> 2025 </div>
          <div className='absolute top-4 right-4'> 五月 </div>
          <div className='text-[240px]'> 01 </div>
          <div className='text-[60px]'> 星期四 </div>
        </div>

    </>   
  );
}