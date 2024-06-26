function getFormattedDateDifference(date: Date) {
  const now = new Date();
  const targetDate = new Date(date);
 
  let years = now.getFullYear() - targetDate.getFullYear();
  let months = now.getMonth() - targetDate.getMonth();
  let days = now.getDate() - targetDate.getDate();
 
  if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
 
  if (months < 0) {
      years--;
      months += 12;
  }
 
  let shortDifference = `${days ? days+' d': ''}${months ? ' '+months+' m': ''}${years ? ' '+years+' y': ''}` 
  shortDifference = shortDifference.trim() ? shortDifference : 'today';
  return shortDifference 
}
 
export default getFormattedDateDifference;