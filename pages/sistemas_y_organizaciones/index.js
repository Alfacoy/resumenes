import Layout from "../../components/Layout";
import Content from "../../components/Content";
import style from "../../styles/styles.scss";
import Link from "next/link";

const SistemasYOrganizaciones = () => (
  <Layout>
    <Content>
      <header className={style.cat_header}>
        <h2 className={style.cat_title}>Sistemas y organizaciones</h2>
      </header>
      <article className={style.cat_contenido}>
        <p>No hay nuevas entradas</p>
      </article>
    </Content>
  </Layout>
);

export default SistemasYOrganizaciones;
