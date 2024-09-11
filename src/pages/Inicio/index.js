import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import styles from "./Inicio.module.css";
import db from "../../db.json";

function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    setFilmes(db.filmes);
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus filmes favoritos!</h1>
      </Titulo>
      <section className={styles.container}>
        {filmes.map((filme) => {
          return <Card {...filme} key={filme.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
