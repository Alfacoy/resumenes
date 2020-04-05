import Layout from "../../components/Layout";
import Content from "../../components/Content";
import style from "../../styles/styles.scss";
import Link from "next/link";

const PPS = () => (
  <Layout>
    <Content>
      <h3 className={style.title}>Prácticas profesionalizantes</h3>
      <div className={style.contenido}>
        <article>
          <p>No hay nuevas entradas</p>
        </article>
      </div>
    </Content>
  </Layout>
);

export default PPS;
