export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    if (firstName && lastName) {
      const result = {
        firstName,
        lastName,
      };
      resolve(result);
    }
  });
}
