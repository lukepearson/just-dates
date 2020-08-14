import { isNullOrUndefined } from 'util';

export const checkArgs = (arg: any, name: string) => {
  if (isNullOrUndefined(arg)) throw new Error(`Missing argument "${name}"`);
};
