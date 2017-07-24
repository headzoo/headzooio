export function formatDate(date) {
  let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  if (typeof date == "string") {
    date = new Date(date);
  }
  let day        = date.getDate();
  let monthIndex = date.getMonth();
  let year       = date.getFullYear();
  
  return `${day} ${monthNames[monthIndex]} ${year}`;
}