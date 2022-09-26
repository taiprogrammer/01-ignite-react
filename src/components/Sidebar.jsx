import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="Cover Profile"
      />
      <div className={styles.profile}>
        <img
          src="https://github.com/taiprogrammer.png"
          alt="User Profile Icon"
        />
        <strong>Taiza Marques</strong>
        <span>Web/Mobile Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
