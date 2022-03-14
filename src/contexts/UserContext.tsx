import { Login } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { FakeUserFetch } from "../Api/Api";
import { User} from '../Api/Data'
import { LoginDetails } from "../components/Forms/LoginForm";

interface UserContextValue {
  isLoading: boolean;
  user?: User;
  login: (loginDetails: LoginDetails) => void;
}

export const UserContext = React.createContext<UserContextValue>({
  isLoading: false,
  user: { username: "", password: "", isAdmin: false },
  login: (loginDetails: LoginDetails) => {},
});

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginDetails: LoginDetails) => {
    setIsLoading(true);
    const user = await FakeUserFetch("api/login", loginDetails);
    setUser(user);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, login }}>
      {children}
    </UserContext.Provider>
  );
};

// let user = localStorage.getItem('currentUser')
// ? JSON.parse(localStorage.getItem('currentUser')).user
// : "";

// let token = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).auth_token
//   : "";
 
// export const initialState ={
//     userDetails: '' || user,
//     token: '' || token
//     isLoading: false
//     errorMessage: null
// }
// export const AuthReducer =(inititalState, action) =>{
//     switch(action.type){
//         case 'REQUEST_LOGIN':
//             return{
//                 ...inititalState,
//                 isLoading: true
//             }
//             case "LOGIN_SUCCESS":
//       return {
//         ...initialState,
//         user: action.payload.user,
//         token: action.payload.auth_token,
//         isLoading: false
//       };
//     case "LOGOUT":
//       return {
//         ...initialState,
//         user: "",
//         token: ""
//       };
 
//     case "LOGIN_ERROR":
//       return {
//         ...initialState,
//         isLoading: false,
//         errorMessage: action.error
//       };
 
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
// }

export default UserContext;
export const useUser = () => useContext(UserContext)
