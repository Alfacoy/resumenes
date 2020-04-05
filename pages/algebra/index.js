import Layout from "../../components/Layout";
import Content from "../../components/Content";
import Link from "next/link";
import style from "../../styles/styles.scss";

const Algebra = () => (
  <Layout>
    <Content>
      <h3 className={style.title}>Álgebra</h3>
      <div className={style.contenido}>
        <article>
          <div className={style.card}>
            <Link href="/algebra/logica_proposicional">
              <a>- Lógica proposicional</a>
            </Link>
          </div>
        </article>
      </div>
    </Content>
  </Layout>
);

export default Algebra;
