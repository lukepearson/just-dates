# Just Dates

## Why?

There are plenty of libraries dealing with datetimes. With just-dates you can parse/modify/query dates as plain objects without having to convert them to datetimes.

API inspired by [date-fns](https://date-fns.org/)

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

## Modifiers
* add ☑️
* addDays ☑️
* addMonths ☑️
* addQuarters ☑️
* addWeekDays ☑️
* addWeeks ☑️
* addYears ☑
* set
* setDay
* setDayOfYear
* setISODay
* setISOWeek
* setISOWeekYear
* setQuarter
* setWeek
* setWeekYear
* sub ☑️
* subDays ☑️
* subISOWeekYears
* subMonths ☑️
* subQuarters
* subWeekDays
* subWeeks
* subYears ☑️

## Comparators
* diffCalendarISOWeeks
* diffCalendarISOWeekYears
* diffCalendarMonths
* diffCalendarQuarters
* diffCalendarWeeks
* diffCalendarYears
* diffDays
* diffISOWeekYears
* diffMonths
* diffQuarters
* diffWeekDays
* diffWeeks ☑
* diffYears

## Generators
* generateMonth
* generateRange
* generateWeek
* generateYear

## Formatters
* format
* formatDistance
* formatDistanceStrict
* formatDuration
* formatRelative

## Queries
* getDayOfYear
* getDaysInMonth
* getDaysInYear
* getDecade
* getEndOfDecade
* getEndOfISOWeek
* getEndOfISOWeekYear
* getEndOfMonth
* getEndOfQuarter
* getEndOfWeek
* getEndOfYear
* getISODay
* getISOWeek
* getISOWeeksInYear
* getISOWeekYear
* getOverlappingDaysInIntervals
* getQuarter
* getStartOfDecade
* getStartOfISOWeek
* getStartOfISOWeekYear
* getStartOfMonth
* getStartOfQuarter
* getStartOfWeek
* getStartOfWeekYear
* getStartOfYear
* getWeek
* getWeekOfMonth
* getWeeksInMonth
* getWeekYear
* isAfter ☑️
* isBefore ☑️
* isEqual ☑️
* isFriday
* isIn
* isLastDayOfMonth
* isLeapYear
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
* max
* min

## Parsers
* parse

## Todo
* Add example project
* Add examples for each function in jsdoc
* Check package size is ok
* Check performance is ok
* Flow?
* Locales
