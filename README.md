# Just Dates

## Why?

There are plenty of libraries dealing with datetimes, but sometimes you don't care about the time element. With just-dates you can parse/modify/query date objects without having to worry about time

## Still, why?

Say you are born on the 1st of January in Alaska. You wouldn't start celebrating on the 31st of December if you moved to Japan. There are other times when you want an approximate day, say when to take your car for its annual checkup, or it could be that all of your application's transactions happen in a single timezone, so there's no need to complicate it by adding time/timezones to the mix.

This library allows you to do things like sort dates, compare relative distances etc.. without having to convert them to datetimes

## Installation

NPM
```bash
npm i --save just-dates
```
Yarn
```bash
yarn add just-dates
```

## Usage

```js
import { DateObject, addDays, formatISO } from 'just-dates';

const dateObject: DateObject = { year: 2020, month: 06, day: 12 };
const in20Days = addDays(dateObject, 20);

console.log(`20 days from now is ${formatISO(in20Days))}`);
```

## Functions

* add ☑️
* addWeekDays
* addDays ☑️
* addISOWeekYears
* addMonths ☑️
* addQuarters
* addWeeks
* addYears ☑️
* areIntervalsOverlapping
* closestIndexTo
* closestTo
* compareAsc
* compareDesc
* differenceInWeekDays
* differenceInCalendarDays
* differenceInCalendarISOWeekYears
* differenceInCalendarISOWeeks
* differenceInCalendarMonths
* differenceInCalendarQuarters
* differenceInCalendarWeeks
* differenceInCalendarYears
* differenceInDays
* differenceInISOWeekYears
* differenceInMonths
* differenceInQuarters
* differenceInWeeks
* differenceInYears
* eachDayOfInterval
* eachHourOfInterval
* eachMonthOfInterval
* eachQuarterOfInterval
* eachWeekOfInterval
* eachWeekendOfInterval
* eachWeekendOfMonth
* eachWeekendOfYear
* eachYearOfInterval
* endOfDay
* endOfDecade
* endOfISOWeek
* endOfISOWeekYear
* endOfMonth
* endOfQuarter
* endOfWeek
* endOfYear
* format
* formatDistance
* formatDistanceStrict
* formatDuration
* formatRelative
* getDayOfYear
* getDaysInMonth
* getDaysInYear
* getDecade
* getISODay
* getISOWeek
* getISOWeekYear
* getISOWeeksInYear
* getOverlappingDaysInIntervals
* getQuarter
* getWeek
* getWeekOfMonth
* getWeekYear
* getWeeksInMonth
* intervalToDuration
* isAfter ☑️
* isBefore ☑️
* isEqual ☑️
* isExists
* isFirstDayOfMonth
* isFriday
* isLastDayOfMonth
* isLeapYear
* isMatch
* isMonday
* isNumberLeapYear
* isSameDay
* isSameISOWeek
* isSameISOWeekYear
* isSameMonth
* isSameQuarter
* isSameWeek
* isSameYear
* isSaturday
* isSunday
* isThursday
* isTuesday
* isValid ☑️
* isWednesday
* isWeekend
* isWithinInterval
* lastDayOfDecade
* lastDayOfISOWeek
* lastDayOfISOWeekYear
* lastDayOfMonth
* lastDayOfQuarter
* lastDayOfWeek
* lastDayOfYear
* locale
* max
* min
* parse
* set
* setDate
* setDay
* setDayOfYear
* setISODay
* setISOWeek
* setISOWeekYear
* setMonth
* setQuarter
* setWeek
* setWeekYear
* setYear
* startOfDay
* startOfDecade
* startOfISOWeek
* startOfISOWeekYear
* startOfMonth
* startOfQuarter
* startOfWeek
* startOfWeekYear
* startOfYear
* startOfYesterday
* sub
* subWeekDays
* subDays ☑️
* subISOWeekYears
* subMonths ☑️
* subQuarters
* subWeeks
* subYears ☑️


## Generators?
generateFullYear
generateFullMonth
generateRange
etc..

## Uses
Games where you want to track dates but not necessarily times
booking systems -> select date -> fetch times from API -> select time separately


