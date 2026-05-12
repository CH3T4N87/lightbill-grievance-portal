import { useState } from "react";
import styles from "./App.module.scss";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div className={styles.container}>
      {isAdmin ? <AdminPanel /> : <CustomerSupport />}
    </div>
  )
}

export default App