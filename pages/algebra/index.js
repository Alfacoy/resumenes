import Layout from "../../components/Layout";
import Content from "../../components/Content";
import Link from "next/link";
import style from "../../styles/styles.scss";

const Algebra = () => (
  <Layout>
    <Content>
      <header className={style.cat_header}>
        <h2 className={style.cat_title}>Álgebra</h2>
      </header>

      <article className={style.cat_contenido}>
        <ul>
          <li className={style.cat_card}>
            <Link href="/algebra/logica_proposicional">
              <a>- Lógica proposicional</a>
            </Link>
          </li>
        </ul>
      </article>
    </Content>
  </Layout>
);

export default Algebra;
