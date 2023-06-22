const dateTimeFormat = (options: Intl.DateTimeFormatOptions, date: Date): string => {
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const dateFormat = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return dateTimeFormat(options, date);
}

export const timeFormat = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric'
  };

  return dateTimeFormat(options, date);
}