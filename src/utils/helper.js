export const validateEmail = (email) => {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(email);
}

export const checkValidUrl = (url) => {
   const isValidPotocol = checkValidProtocol(url);
   const isString = typeof url === 'string';

   return isValidPotocol && isString;
}

const checkValidProtocol = (url) => {
   return url.includes('http://') || url.includes('https://');
}