import { useReducer, useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modals/Modal";
import styles from "./AdminPanel.module.scss";
import AddForm from "../Forms/AddForm/AddForm";
import Table from "../Table/Table";
import type { AdminPanelActions } from "./AdminPanel.types";


const tableHeads = ["Name", "Type", "Photos", "Total", "Action"];
const reducer = (state: boolean, action: AdminPanelActions): boolean => {
  switch(action.type){
    case "SHOW_ADD_MODAL":
      return true;
    case "HIDE_ADD_MODAL":
      return false;
    default:
      return state
  }
}
const AdminPanel = () => {
  const [state, dispatch] = useReducer(reducer, false);

  const openAddFormModal = () => {
    dispatch({type: "SHOW_ADD_MODAL"})
  }

  const closeAddFormModal = () => {
    dispatch({type: "HIDE_ADD_MODAL"})
  }
  return (
    <>
      <main className={styles.AdminPanel}>
        <Header onAddButton={openAddFormModal} />
        <Table tableHeads={tableHeads} />
      </main>
      <aside>
        {state && <Modal><AddForm toCloseAddModal={closeAddFormModal}/></Modal>}
      </aside>
    </>
  )
}

export default AdminPanel