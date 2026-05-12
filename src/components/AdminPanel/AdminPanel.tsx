import { useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modals/Modal";
import styles from "./AdminPanel.module.scss";
import AddForm from "../Forms/AddForm/AddForm";
import Table from "../Table/Table";


const tableHeads = ["Name", "Type", "Photos", "Total", "Action"];

const AdminPanel = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddButton = () => {
    setShowAddModal(true)
  }
  return (
    <>
      <main className={styles.AdminPanel}>
        <Header onAddButton={handleAddButton}/>
        <Table tableHeads={tableHeads}/>
      </main>
      <aside>
        {showAddModal && <Modal><AddForm/></Modal>}
      </aside>
    </>
  )
}

export default AdminPanel