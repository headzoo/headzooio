export function formatDate(date) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];

  if (typeof date === 'string') {
    date = new Date(date); // eslint-disable-line no-param-reassign
  }
  const day        = date.getDate();
  const monthIndex = date.getMonth();
  const year       = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
}
