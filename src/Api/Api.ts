import { User, mockedUsers } from '../Api/Data'
import { LoginDetails } from '../components/Forms/LoginForm';

export async function FakeUserFetch(loginDetails: LoginDetails) {

  return new Promise<User>((resolve) => {
    setTimeout(() => {
      const foundUsers = mockedUsers.filter((user) => {
        return user.username === loginDetails.username
      })

      if (!foundUsers.length) {
        throw new Error('Tyvärr så finns inte denna användare.')
      }

      const foundUser = foundUsers[0]

      if (foundUser.password !== loginDetails.password) {
        throw new Error('Tyvärr så stämmer ej lösenordet.')
      }

      resolve(foundUser);
    }, 1000);
  });
}


export async function placeOrderFetch() {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}