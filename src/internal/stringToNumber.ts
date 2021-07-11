import { DateObject, StringDateObject } from 'src/dateObject';

const convertToDateObject = (dateObject: StringDateObject | DateObject): DateObject => {
  return {
    year: Number(dateObject.year),
    month: Number(dateObject.month),
    day: Number(dateObject.day),
  };
};

export const stringToNumber = (
  dateObjects: Array<StringDateObject | DateObject>
): Array<DateObject> => dateObjects.map(convertToDateObject);
