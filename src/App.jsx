import "./global.css";
import styles from "./App.module.css";

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  const posts = [
    {
      id: 1,
      publishedAt: new Date(2022, 9, 29, 21, 30),
      author: {
        avatarUrl: "https://github.com/taiprogrammer.png",
        name: "Taiza Marques",
        role: "Web/Mobile Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
        {
          type: "hashtag",
          content: "#novoprojeto",
        },
        {
          type: "hashtag",
          content: "#nlw",
        },
        { type: "hashtag", content: "#rocketseat" },
      ],
      comments: [
        {
          id: 1,
          author: {
            avatarUrl: "https://github.com/IgorSilvaZZ.png",
            name: "Igor da Silva",
          },
          content: "Projeto nice!",
          likes: 30,
          time: new Date(2022, 9, 30, 10, 30, 28),
        },
        {
          id: 2,
          author: {
            avatarUrl: "https://github.com/RaissaC.png",
            name: "Raissa Cesar",
          },
          content: "Parabéns amiga, ficou lindo!",
          likes: 50,
          time: new Date(2022, 9, 30, 11, 58),
        },
        {
          id: 3,
          author: {
            avatarUrl: "https://github.com/lucabarbos.png",
            name: "Lucas Barbosa",
          },
          content: "Belo projeto!!!",
          likes: 100,
          time: new Date(),
        },
      ],
    },
    {
      id: 2,
      publishedAt: new Date(2022, 9, 30, 12, 30),
      author: {
        avatarUrl: "https://github.com/IgorSilvaZZ.png",
        name: "Igor da Silva",
        role: "Web/Mobile Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
        {
          type: "hashtag",
          content: "#novoprojeto",
        },
        {
          type: "hashtag",
          content: "#nlw",
        },
        { type: "hashtag", content: "#rocketseat" },
      ],
      comments: [
        {
          id: 1,
          author: {
            avatarUrl: "https://github.com/IgorSilvaZZ.png",
            name: "Igor da Silva",
          },
          content: "Projeto nice!",
          likes: 30,
          time: new Date(2022, 9, 30, 13, 30, 45),
        },
        {
          id: 2,
          author: {
            avatarUrl: "https://github.com/RaissaC.png",
            name: "Raissa Cesar",
          },
          content: "Parabéns amiga, ficou lindo!",
          likes: 50,
          time: new Date(2022, 9, 30, 14, 20, 45),
        },
      ],
    },
    {
      id: 3,
      publishedAt: new Date(2022, 8, 29, 21, 30),
      author: {
        avatarUrl: "https://github.com/RaissaC.png",
        name: "Raissa Cesar",
        role: "Back End Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
        {
          type: "hashtag",
          content: "#novoprojeto",
        },
        {
          type: "hashtag",
          content: "#nlw",
        },
        { type: "hashtag", content: "#rocketseat" },
      ],
      comments: [
        {
          id: 1,
          author: {
            avatarUrl: "https://github.com/IgorSilvaZZ.png",
            name: "Igor da Silva",
          },
          content: "Projeto nice!",
          likes: 30,
          time: new Date(2022, 8, 30, 9, 30, 30),
        },
        {
          id: 2,
          author: {
            avatarUrl: "https://github.com/RaissaC.png",
            name: "Raissa Cesar",
          },
          content: "Parabéns amiga, ficou lindo!",
          likes: 50,
          time: new Date(2022, 9, 2, 12, 45, 50),
        },
      ],
    },
    {
      id: 4,
      publishedAt: new Date(2022, 9, 12, 25, 40, 30),
      author: {
        avatarUrl: "https://github.com/silvafranks.png",
        name: "It's a such Franks",
        role: "Back End Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa",
        },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
        },
        {
          type: "link",
          content: "jane.design/doctorcare",
        },
        {
          type: "hashtag",
          content: "#novoprojeto",
        },
        {
          type: "hashtag",
          content: "#nlw",
        },
        { type: "hashtag", content: "#rocketseat" },
      ],
      comments: [
        {
          id: 1,
          author: {
            avatarUrl: "https://github.com/IgorSilvaZZ.png",
            name: "Igor da Silva",
          },
          content: "Projeto nice!",
          likes: 30,
          time: new Date(2022, 9, 13, 13, 45),
        },
        {
          id: 2,
          author: {
            avatarUrl: "https://github.com/RaissaC.png",
            name: "Raissa Cesar",
          },
          content: "Parabéns amiga, ficou lindo!",
          likes: 50,
          time: new Date(2022, 9, 12, 14, 50, 60),
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ author, content, publishedAt, comments, id }) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
              comments={comments}
            />
          ))}
        </main>
      </div>
    </>
  );
}
