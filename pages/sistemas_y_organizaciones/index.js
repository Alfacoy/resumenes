import Layout from "../../components/Layout";
import Content from "../../components/Content";
import style from "../../styles/styles.scss";
import Link from "next/link";

const SistemasYOrganizaciones = () => (
  <Layout>
    <Content>
      <h3 className={style.title}>Sistemas y organizaciones</h3>
      <div className={style.contenido}>
        <article>
          <p>No hay nuevas entradas</p>
        </article>
      </div>
    </Content>
  </Layout>
);

export default SistemasYOrganizaciones;
