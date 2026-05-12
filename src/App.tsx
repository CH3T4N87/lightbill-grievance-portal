import { useReducer } from "react";
import styles from "./App.module.scss";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
import Button from "./components/Button/Button";
import type { AppAction } from "./App.types";

const reducer = (state: boolean | undefined, action: AppAction) => {
  switch (action.type) {
    case "SET_IS_ADMIN":
      return true;
    case "SET_IS_CUSTOMERSUPPORT":
      return false;
    default:
      return state;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, true);


  return (
    <div className={styles.container}>
      <Button onClick={() => dispatch({ type: "SET_IS_ADMIN" })}>
        Admin
      </Button>

      <Button onClick={() => dispatch({ type: "SET_IS_CUSTOMERSUPPORT" })}>
        Customer Support
      </Button >

      {state ? <AdminPanel /> : <CustomerSupport />}
    </div>
  )
}

export default App  