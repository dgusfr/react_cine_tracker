import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFilmeContext } from "contextos/FilmeContext";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import NaoEncontrada from "pages/NaoEncontrada";
import styles from "./Player.module.css";
import filmesData from "../../db.json"; // Importe o db.json

function Player() {
  const { id } = useParams();
  const { carregarFilme, loading, erro } = useFilmeContext();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const filmeLocal = filmesData.filmes.find(
      (filme) => filme.id === Number(id)
    );

    if (!filmeLocal) {
      setFilme(null);
      return;
    }

    const fetchFilme = async () => {
      const filmeComNota = await carregarFilme(filmeLocal);
      setFilme(filmeComNota);
    };

    fetchFilme();
  }, [id, carregarFilme]);

  if (loading) {
    return <div className={styles.loading}>Carregando o filme...</div>;
  }

  if (erro || !filme) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>{filme.titulo}</h1>
      </Titulo>
      <section className={styles.container}>
        <p>{filme.sinopse}</p>
        <p>Nota: {filme.nota}/10</p>
      </section>
    </>
  );
}

export default Player;
