import styles from "./Avatar.module.css";

export function Avatar({ photo, applyBorder }) {
  return (
    <img
      className={applyBorder ? styles.avatar : styles.avatarComment}
      src={photo}
      alt="User Profile Icon"
    />
  );
}
