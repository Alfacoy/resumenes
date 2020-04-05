import Layout from "../../../components/Layout";
import Content from "../../../components/Content";
import style from "../../../styles/styles.scss";
const Proposicional = () => (
  <Layout>
    <Content>
      <h2>Lógica proposicional</h2>
      <article className={style.fora}>
        <h3>¿Qué es la lógica?</h3>
        <p>
          * Es una ciencia que se dedica a lo relativo a la razón, a la palabra
          y a la ciencia.
        </p>

        <p>* El objeto de estudio de la lógica es el artgumento.</p>

        <p>
          * Un argumento es la base de las ciencias en la forma en la que se
          pueden transmitir importantes descubrimientos. Además, es la forma mas
          efectiva de convencer de un punto de vista o idea.
        </p>

        <p>
          * Los razonamientos son la base de las ciencias o de los conocimientos
          humanos.
        </p>

        <p>
          * La lógica como ciencia, es aquella que se de dedica a dar pautas
          para expresar nuestras ideas de manera clara, de ayudarnos a razonar
          correctamente y generar argumentos validos. La lógica es la base de
          todas las ciencias.
        </p>

        <diV className={style.remarque}>
          <p>
            Una ciencia es producto de razonamientos y discursos. En este caso
            de argumentos. El nucleo de la lógica es el argumento y el argumento
            es el cimiento de las ciencias. Por consiguiente, la lógica es la
            base de todas las ciencias.
          </p>
        </diV>
      </article>

      <article className={style.fora}>
        <h3>¿Qué es una proposición o enunciado lógico?</h3>

        <p>
          * Es una expresión con valor informativo que puede ser{" "}
          <span className={style.remarque}>Verdadero</span> o{" "}
          <span className={style.remarque}>Falso</span>, pero no ambos a la vez.
        </p>

        <ul className={style.listas}>
          <h4>Son proposiciones</h4>
          <li>La luna es un planeta de nuestra galaxia.</li>
          <li>Los perros son mamiferos.</li>
          <li>La temperatura media de la Habana es bastante alta.</li>
        </ul>
        <br />
        <ul className={style.listas}>
          <h4>No son proposiciones</h4>
          <li>¡Baja el tono de voz!</li>
          <li>8 x 8</li>
          <li>Hoy es lunes.</li>
        </ul>
        <br />
        <h3>Clasificación</h3>

        <p>
          <b>
            <u>Proposiciones simples</u>
          </b>
          : son aquellas que carecen de conectores lógicos. Por ejemplo:
          "Argentina forma parte de America del Sur".
        </p>
        <p>
          <b>
            <u>Proposiciones complejas</u>
          </b>
          : son el resultado de varias proposiciones simples, unidas por uno o
          más conectores lógicos. Por ejemplo: "Argentina forma parte de America
          del sur y limita con cinco paises de este."
        </p>
      </article>
    </Content>
  </Layout>
);

export default Proposicional;
