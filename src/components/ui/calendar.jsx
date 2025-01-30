import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import cn from '@/lib/cn';

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center px-8 ', // Added px-8 for spacing
        caption_label: 'text-sm font-medium pl-12',
        nav: '  absolute left-1 right-1 w-full top-[3px]', // Modified to flex and full width
        nav_button: cn(
          'h-full w-full p-0 opacity-50 hover:opacity-100 flex items-center justify-center  ',
        ),
        nav_button_previous: 'absolute left-1 ',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex ',
        head_cell:
          'text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] dark:text-neutral-400 bg-red-500',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100 [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md dark:[&:has([aria-selected])]:bg-neutral-800 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn('h-8 w-8 p-0 font-normal aria-selected:opacity-100 '),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 focus:bg-neutral-900 focus:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900',
        day_today:
          'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50',
        day_outside:
          'day-outside text-neutral-500 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400',
        day_disabled: 'text-neutral-500 opacity-50 dark:text-neutral-400',
        day_range_middle:
          'aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('h-4 w-4', className)} {...props} />
        ),
      }}
      mode="single"
      defaultMonth={new Date()}
      startMonth={new Date(2024, 0)}
      endMonth={new Date(2025, 11)}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
