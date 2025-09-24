export const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const capitalizeFirstLetter = s =>
  s.charAt(0).toUpperCase() + s.slice(1);
