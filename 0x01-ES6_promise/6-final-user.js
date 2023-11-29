import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const results = [];
  return Promise.allSettled(promises)
    .then((result) => {
      result.map(({ status, value, reason }) => (
        results.push({
          status,
          value: status === 'rejected' ? reason.toString() : value,
        })
      ));
      return results;
    });
}
