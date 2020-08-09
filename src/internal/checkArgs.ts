export const checkArgs = (arg: any, name: string) => {
  if (!arg) throw new Error(`Missing argument "${name}"`);
};
