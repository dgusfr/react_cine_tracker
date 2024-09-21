import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFilmeContext } from "contextos/FilmeContext";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import NaoEncontrada from "pages/NaoEncontrada";
import styles from "./Player.module.css";

function Player() {
  const { id } = useParams();
  const { filme, carregarFilme, loading, erro } = useFilmeContext();

  useEffect(() => {
    carregarFilme(id);
  }, [id, carregarFilme]);

  if (loading) {
    return <div className={styles.loading}>Carregando o filme...</div>;
  }

  if (erro) {
    return <div className={styles.erro}>{erro}</div>;
  }

  if (!filme) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>{filme.title}</h1>
      </Titulo>
      <section className={styles.container}>
        <p>{filme.overview}</p>
        <p>Nota: {filme.vote_average}/10</p>
      </section>
    </>
  );
}

export default Player;
