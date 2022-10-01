import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ comment }) {
  const timeCommentPublished = comment.time;

  const relativeDateToNow = formatDistanceToNow(timeCommentPublished, {
    locale: ptBR,
    addSuffix: true,
  });

  const formattedDate = format(
    timeCommentPublished,
    "dd 'de' LLLL 'às' HH:mm",
    { locale: ptBR }
  );
  const dateTimeFormatted = format(timeCommentPublished, "uuuu-LL-dd HH:mm:ss");
  return (
    <div className={styles.comment}>
      <Avatar photo={comment.author.avatarUrl} applyBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.author.name}</strong>
              <time title={formattedDate} dateTime={dateTimeFormatted}>
                {relativeDateToNow}
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
