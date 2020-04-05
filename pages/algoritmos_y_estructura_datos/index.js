import Layout from "../../components/Layout";
import Content from "../../components/Content";
import style from "../../styles/styles.scss";
import Link from "next/link";

const AlgoritmoDatos = () => (
  <Layout>
    <Content>
      <h3 className={style.title}>Algoritmos y estructuras de datos</h3>
      <div className={style.contenido}>
        <article>
          <p>No hay nuevas entradas</p>
        </article>
      </div>
    </Content>
  </Layout>
);

export default AlgoritmoDatos;
