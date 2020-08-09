// import { DateObject } from 'dateObject';
// import { addDays } from './addDays';

// export const addBusinessDays = (dateObject: DateObject, days: number): DateObject => {
//   checkArgs(dateObject, 'dateObject');
//   let extraDays = days % 5;
//   if (isSaturday(dateObject)) {
//     extraDays += 2;
//   }
//   if (isSunday(dateObject)) {
//     extraDays += 1;
//   }
//   const totalDays = Math.floor(days / 5) * 7 + extraDays;
//   return addDays(dateObject, totalDays);
// };
