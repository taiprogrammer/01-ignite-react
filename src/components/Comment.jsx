import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <Avatar photo={comment.author.avatarUrl} applyBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.author.name}</strong>
              <time title="11 de Maio às 11:13" dateTime="2022-05-11 08:13:30">
                Cerca de {comment.time.toString()}h atrás
                {/* {console.log(comment.time)} */}
              </time>
            </div>
            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>{comment.likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
