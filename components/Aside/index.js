import Header from "../Header";
import Footer from "../footer";
import Link from "next/link";
import style from "./style.scss";

const Aside = () => (
  <aside className={style.aside}>
    <Header />
    <nav className={style.navigator}>
      <h4>1er Año</h4>
      <ul className={style.navigator_list}>
        <li>
          <Link href="/algebra">
            <a>Álgebra</a>
          </Link>
        </li>
        <li>
          <Link href="/sistemas_y_organizaciones">
            <a>Sistemas y Organizaciones</a>
          </Link>
        </li>
        <li>
          <Link href="/algoritmos_y_estructura_datos">
            <a>Algortimos y Estructuras de Datos</a>
          </Link>
        </li>
        <li>
          <Link href="/arquitectura_computadores">
            <a>Arquitectura de Computadores</a>
          </Link>
        </li>
        <li>
          <Link href="/practicas_profesionalizantes">
            <a>Prácticas Profesionalizantes</a>
          </Link>
        </li>
        <li>
          <Link href="/analisis_matematico">
            <a>Análisis matemático</a>
          </Link>
        </li>
        <li>
          <Link href="/ingles_tecnico">
            <a>Inglés Técnico</a>
          </Link>
        </li>
        <li>
          <Link href="/ciencia_tecnologia_sociedad">
            <a>Ciencia,Tecnología y Sociedad</a>
          </Link>
        </li>
      </ul>
    </nav>

    <Footer />
  </aside>
);

export default Aside;
