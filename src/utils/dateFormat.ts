const dateTimeFormat = (options: Intl.DateTimeFormatOptions, date: Date): string => {
  try {
    const formatedDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return formatedDate
  } catch (err) {
    console.log(err)
    return ''
  }
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