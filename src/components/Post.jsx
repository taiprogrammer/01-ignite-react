import styles from "./Post.module.css";

import { useRef, useState } from "react";

import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post({ author, publishedAt, comments, content }) {
  const [comment, setComment] = useState("");

  const [commentsList, setCommentsList] = useState(comments);

  const fieldElement = useRef();
  const relativeDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const dateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  });

  const dateTimeFormatted = format(publishedAt, "uuuu-LL-dd HH:mm:ss", {
    locale: ptBR,
  });

  function addNewComment(e) {
    e.preventDefault();

    setCommentsList([
      ...commentsList,
      {
        id: commentsList.length + 1,
        author: {
          avatarUrl: "https://github.com/taiprogrammer.png",
          name: "Taiza Marques",
        },
        content: comment,
        likes: 0,
        time: new Date(),
      },
    ]);

    setComment("");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = commentsList.filter((comment) => {
      return comment.id !== commentToDelete;
    });

    setCommentsList(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = comment === "";
  // function handleNewCommentInvalid(event) {
  //   console.log(event);
  //   event.target.setCustomValidity("Este campo é obrigatório!");
  // }

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
        <time title={dateFormatted} dateTime={dateTimeFormatted}>
          {relativeDateToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          } else if (line.type === "hashtag") {
            return (
              <a key={line.content} href="#">
                {line.content}{" "}
              </a>
            );
          }
        })}
      </div>
      <form onSubmit={addNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={(event) => setComment(event.target.value)}
          name="comment"
          value={comment}
          ref={fieldElement}
          placeholder="Deixe um comentário"
          required
          // onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {commentsList.map((comment) => (
          <Comment
            comment={comment}
            onDeleteComment={deleteComment}
            key={comment.id}
          />
        ))}
      </div>
    </article>
  );
}
