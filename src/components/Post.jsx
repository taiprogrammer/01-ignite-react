import styles from "./Post.module.css";

import intervalToDuration from "date-fns/intervalToDuration";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post({ author, publishedAt, comments, content }) {
  const timePublished = publishedAt;
  const timeNow = new Date();

  const { hours, days } = intervalToDuration({
    start: timePublished,
    end: timeNow,
  });

  const duration = intervalToDuration({
    start: timePublished,
    end: timeNow,
  });

  const month = format(publishedAt, "LLLL", { locale: ptBR });

  console.log(duration);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar photo={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={`${publishedAt.getDate()} de ${month} às ${publishedAt.getHours()}:${publishedAt.getMinutes()}`}
          dateTime={`${publishedAt.getDate()} ${publishedAt.getTime()}`}
        >
          Publicado há {hours}h
        </time>
      </header>
      <div className={styles.content}>
        <p>{content[0]}</p>
        <p>{content[1]}</p>
        <p>
          <a href="#">{content[2]}</a>
        </p>
        <p>
          <a href="#">{content[3]}</a>
          <a href="#">{content[4]}</a>
          <a href="#">{content[5]}</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </article>
  );
}
