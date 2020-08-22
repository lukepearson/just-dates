export const checkArgs = (arg: any, name: string) => {
  if (arg === null || arg === undefined) throw new Error(`Missing argument "${name}"`);
};
