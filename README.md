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
