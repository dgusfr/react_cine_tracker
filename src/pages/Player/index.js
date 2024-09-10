import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";
import db from "../../db.json";

function Player() {
  const [filme, setFilme] = useState();
  const parametros = useParams();

  useEffect(() => {
    const filmeEncontrado = db.filmes.find(
      (filme) => filme.id === parseInt(parametros.id)
    );
    if (filmeEncontrado) {
      setFilme(filmeEncontrado);
    }
  }, [parametros.id]);

  if (!filme) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>{filme.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <img src={filme.capa} alt={filme.titulo} className={styles.capa} />
        <p>Descrição do filme aqui...</p>
      </section>
    </>
  );
}

export default Player;
