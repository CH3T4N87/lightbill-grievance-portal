import { useEffect, useReducer } from "react";
import styles from "./App.module.scss";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
import Button from "./components/Button/Button";
import type { AppAction, LoginAction, LoginState } from "./App.types";
import { Routes, Route, useNavigate } from "react-router-dom"
import NotFound from "./components/NotFound/NotFound";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import type { Action } from "./components/Forms/AddForm/AddForm.types";
import Navbar from "./components/Navbar/Navbar";

// const reducer = (state: boolean | undefined, action: AppAction) => {
//   switch (action.type) {
//     case "SET_IS_ADMIN":
//       return true;
//     case "SET_IS_CUSTOMERSUPPORT":
//       return false;
//     default:
//       return state;
//   }
// }

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isAuthenticated: true,
        user: action.user
      }
    case "LOGOUT":
      return {
        isAuthenticated: false
      }
  }
  return state;
}

const loginInitialState: LoginState = {
  isAuthenticated: false,
  user: null
}
const App = () => {
  // const [state, dispatch] = useReducer(reducer, true);
  const [loginState, updateLoginState] = useReducer(loginReducer, loginInitialState);
  const routeTo = useNavigate();
  const { isAuthenticated, user } = loginState;

  const onLogin = () => {
    routeTo('/login');
  }

  // useEffect(() => {
  //   if (loginState.isAuthenticated) {
  //     if (loginState.user?.role === "admin") routeTo("/admin");
  //     if (loginState.user?.role === "customer_support") routeTo("/support");
  //   } else {
  //     // routeTo("/login");
  //   }
  // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.roleBtn}>
        {/* <Button onClick={() => dispatch({ type: "SET_IS_ADMIN" })}>
          Admin
        </Button>

        <Button onClick={() => dispatch({ type: "SET_IS_CUSTOMERSUPPORT" })}>
          Customer Support
        </Button > */}
        {/* <Button onClick={() => routeTo("/")}>Back</Button> */}
        {/* <Button onClick={onLogin}>Login</Button> */}
        {/* <Navbar/> */}
      </div>

      {/* {state ? <AdminPanel /> : <CustomerSupport />} */}
      <div className={styles.panel}>
        {
          isAuthenticated ? (
            user?.role === "admin" ? <AdminPanel/> : <CustomerSupport/>
          ) : (
            <LoginPage loginDispatch={updateLoginState} />
          )
        }
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage loginDispatch={updateLoginState} />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App  