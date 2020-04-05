import Layout from "../../components/Layout";
import Content from "../../components/Content";
import style from "../../styles/styles.scss";
import Link from "next/link";

const AnalisisMatematico = () => (
  <Layout>
    <Content>
      <h2 className={style.cat_title}>Análisis matemático</h2>
      <div className={style.cat_contenido}>
        <article>
          <p>No hay nuevas entradas</p>
        </article>
      </div>
    </Content>
  </Layout>
);

export default AnalisisMatematico;
