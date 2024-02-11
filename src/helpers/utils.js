export function formatTimeAgo(isoDate) {
  const date = new Date(isoDate);
  const now = new Date();
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? '1 год назад' : `${years}г назад`;
  } else if (months > 0) {
    return months === 1 ? '1 месяц назад' : `${months}меc назад`;
  } else if (days > 0) {
    return days === 1 ? '1 день назад' : `${days}д назад`;
  } else if (hours > 0) {
    return hours === 1 ? '1 час назад' : `${hours}ч назад`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 минуту назад' : `${minutes}мин назад`;
  } else {
    return 'только что';
  }
}