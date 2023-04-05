export function useTimeFormat() {
  const date = new Date();

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  // console.log(formattedDate); // output: "3 April 2023 2:13 AM"
  return formattedDate;
}
