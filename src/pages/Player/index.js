import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import NaoEncontrada from "pages/NaoEncontrada";
import { useFilmeContext } from "contextos/FilmeContext";
import { useEffect } from "react";

function Player() {
  const { id } = useParams();
  const { filme, carregarFilme, loading, erro } = useFilmeContext();

  useEffect(() => {
    carregarFilme(id);
  }, [id, carregarFilme]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (erro) {
    return <div>{erro}</div>;
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
