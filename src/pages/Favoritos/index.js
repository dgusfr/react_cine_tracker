import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Favoritos.module.css";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Filmes Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((filme) => {
          return <Card {...filme} key={filme.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
