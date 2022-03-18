const getAge = (birthday: string): number => {
  const millis = Date.now() - Date.parse(birthday);

  return new Date(millis).getFullYear() - 1970;
};

export default getAge;
