# Just Dates

## Why?

There are plenty of libraries dealing with datetimes, but sometimes you don't care about the time element. With just-dates you can parse/modify/query dates without having to convert them to datetimes

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
* addWeekDays ☑️
* addDays ☑️
* addMonths ☑️
* addQuarters
* addWeeks ☑️
* addYears ☑ 
* differenceInWeekDays
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
* isIn
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
* sub ☑️
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

## Todo

* Add examples for each function
* Add example project that uses the * library
* Check package size is ok
* Check performance is ok
* Flow?

## Uses
Games where you want to track dates but not necessarily times
booking systems -> select date -> fetch times from API -> select time separately


