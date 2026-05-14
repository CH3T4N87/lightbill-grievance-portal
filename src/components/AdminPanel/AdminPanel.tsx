import { use, useEffect, useReducer, useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modals/Modal";
import styles from "./AdminPanel.module.scss";
import AddForm from "../Forms/AddForm/AddForm";
import Table from "../Table/Table";
import type { AddBillAction, AdminPanelActions } from "./AdminPanel.types";
import type { User } from "../../types";
import AddBillForm from "../Forms/AddBillForm/AddBillForm";


const tableHeads = ["Id", "Name", "Type", "Action"];

const reducer = (state: boolean, action: AdminPanelActions): boolean => {
  switch (action.type) {
    case "SHOW_ADD_MODAL":
      return true;
    case "HIDE_ADD_MODAL":
      return false;
    default:
      return state
  }
}
const billReducer = (state: boolean, action: AddBillAction): boolean => {
  switch(action.type){
    case "SHOW_ADD_BILL_MODAL":
      return true;
    case "HIDE_ADD_BILL_MODAL":
      return false;
    default:
      return state;
  }
}
const AdminPanel = () => {
  const [state, dispatch] = useReducer(reducer, false);
  const [showAddBillModal, updateShowBillModal] = useReducer(billReducer, false);
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  const openAddFormModal = () => {
    dispatch({ type: "SHOW_ADD_MODAL" })
  }
  const closeAddFormModal = () => {
    dispatch({ type: "HIDE_ADD_MODAL" })
  }
  const handleShowBillModal = () => {
    updateShowBillModal({ type: "SHOW_ADD_BILL_MODAL" });
  }
  const handleHideBillModal = () => {
    updateShowBillModal({ type: "HIDE_ADD_BILL_MODAL" });
  }

  const toSetUsers = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
    setUsers(users);
  }

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users") ?? '');
    //will fetch from backend instead of this.....
    setUsers(users);
  }, [])
  return (
    <>
      <main className={styles.AdminPanel}>
        <Header onAddButton={openAddFormModal} />
        <Table tableHeads={tableHeads} tableBody={users} addBillTogglerFn={[handleShowBillModal, handleHideBillModal]}/>
      </main>
      <aside>
        {state && <Modal><AddForm toCloseAddModal={closeAddFormModal} toSetUsersFn={toSetUsers} /></Modal>}
        {showAddBillModal && <Modal><AddBillForm toCloseAddBill={handleHideBillModal}/></Modal>}
      </aside>
    </>
  )
}

export default AdminPanel