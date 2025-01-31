'use client';

import * as React from 'react';
import { addDays, format } from 'date-fns';
import { CalendarIcon, ChevronDown } from 'lucide-react';

import cn from '@/lib/cn';
import Button from '@/components/ui/Button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function DatePickerWithRange({ className }) {
  const [date, setDate] = React.useState({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              'w-[300px] justify-start text-left  hover:bg-transparent font-normal bg-white text-primary mt-0 ',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 " align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            fromYear={new Date().getFullYear() - 1} // Current year - 1
            toYear={new Date().getFullYear() + 1} // Current year + 1
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
