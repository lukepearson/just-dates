# Just Dates 🗓

Parse / modify / query / format / compare dates as plain objects without converting them to datetimes.

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
import { DateObject, addDays, format, localToday, addYears, addMonths } from 'just-dates';

const today: DateObject = localToday();
const in20Days = addDays(today, 20);
const in20Months = addMonths(today, 20);
const in20Years = addYears(today, 20);

console.log(`20 days from now is ${format(in20Days)}`);
console.log(`20 months from now is ${format(in20Months)}`);
console.log(`20 years from now is ${format(in20Years)}`);
```

## API
### Modifiers (returns new DateObject)
* add ✓
* addDays ✓
* addMonths ✓
* addQuarters ✓
* addWeekDays ✓
* addWeeks ✓
* addYears ✓
* set ✓
* setDay ✓
* setDayOfYear ✓
* setDayOfWeek ✓
* setMonth ✓
* setQuarter ✓
* setWeek ✓
* setYear ✓
* sub ✓
* subDays ✓
* subMonths ✓
* subQuarters ✓
* subWeekDays ✓
* subWeeks ✓
* subYears ✓

### Durations
* getDuration ✓
* formatDuration ✓

### Comparators
* diffDays ✓
* diffMonths ✓
* diffQuarters ✓
* diffWeekDays ✓
* diffWeeks ✓
* diffYears ✓

### Generators
* localToday ✓
* UTCToday ✓
* generateMonth ✓
* generateRange ✓
* generateWeek ✓
* generateYear ✓
* generateWeekYear ✓

### Formatters
* format ✓
* formatDistance ✓
* formatFromNow ✓

### Queries
* getDayOfYear ✓
* getDaysInMonth ✓
* getDaysInYear ✓
* getEndOfMonth ✓
* getEndOfQuarter ✓
* getEndOfWeek ✓
* getEndOfWeekYear ✓
* getEndOfYear ✓
* getQuarter ✓
* getStartOfDecade ✓
* getStartOfMonth ✓
* getStartOfQuarter ✓
* getStartOfWeek ✓
* getStartOfWeekYear ✓
* getStartOfYear ✓
* getCalendarWeek ✓
* getWeekOfMonth ✓
* getWeeksInMonth ✓
* isAfter ✓
* isBefore ✓
* isEqual ✓
* isFriday ✓
* isLastDayOfMonth ✓
* isLeapYear ✓
* isMonday ✓
* isNumberLeapYear ✓
* isSameMonth ✓
* isSameQuarter ✓
* isSameWeek ✓
* isSameYear ✓
* isSaturday ✓
* isSunday ✓
* isThursday ✓
* isTuesday ✓
* isValid ✓
* isWednesday ✓
* isWeekend ✓
* max ✓
* min ✓

### Parsers
* parse ✓

## Terms
* day - day of the month (1-31)
* month - month of the year (1-12)
* year - year number (1-????)
* weekYear - ISO week-numbering year 
* week - ISO week number (1-53)
* weekDay - day of the week (1-7, starting on Monday)

## Todo
* Locales
* Allow changing first day of week