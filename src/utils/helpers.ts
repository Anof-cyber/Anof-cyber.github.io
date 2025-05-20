export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateProficiency = (proficiency: number): string => {
  return `${proficiency}%`;
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};