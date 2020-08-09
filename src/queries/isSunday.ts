import { DateObject } from 'dateObject';
import { format } from '../formatters/format';
import { checkArgs } from '../internal/checkArgs';

export const isSunday = (dateObject: DateObject): boolean => {
  checkArgs(dateObject, 'dateObject');
  return new Date(format(dateObject)).getDay() === 0;
};
