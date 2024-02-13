export const normaliseCutLine = (cutLine: string) => {
  return cutLine === 'E' || cutLine === '' ? 0 : parseInt(cutLine);
};
