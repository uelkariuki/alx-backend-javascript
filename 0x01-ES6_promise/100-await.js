import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const result = await uploadPhoto();
    const result2 = await createUser();

    return {
      photo: result,
      user: result2,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,

    };
  }
}
