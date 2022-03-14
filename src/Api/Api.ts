import { User} from '../Api/Data'
import { LoginDetails } from '../components/Forms/LoginForm';

export async function FakeUserFetch(_: string, loginDetails: LoginDetails){
    return new Promise<User>((resolve) => {
        setTimeout(() =>{
            resolve({ username: "User", password: "", isAdmin: false });
        }, 1000);
      });
    }
    

    // export async function FakeUserFetch(_: string){
    //     return new Promise<User>((resolve) => {
    //         setTimeout(() =>{
    //             resolve({ username: "User", password: "", isAdmin: false });
    //         }, 2000);
    //       });
    //     }