export const timeUpdate = value => {
  const userDate = new Date(value);

  const hour = userDate.getHours();
  const minets = userDate.getMinutes();

  const timeForInput = `${hour.toString().padStart(2, '0')}:${minets
    .toString()
    .padStart(2, '0')}`;
  return timeForInput;
};
