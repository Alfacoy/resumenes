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
          Es una ciencia que se dedica a lo relativo a la razón, a la palabra y
          a la ciencia.
        </p>

        <p>El objeto de estudio de la lógica es el argumento.</p>

        <p>
          Un argumento es la base de las ciencias en la forma en la que se
          pueden transmitir importantes descubrimientos. Además, es la forma mas
          efectiva de convencer de un punto de vista o idea.
        </p>

        <p>
          Los razonamientos son la base de las ciencias o de los conocimientos
          humanos.
        </p>

        <p>
          La lógica como ciencia, es aquella que se de dedica a dar pautas para
          expresar nuestras ideas de manera clara, de ayudarnos a razonar
          correctamente y generar argumentos validos. La lógica es la base de
          todas las ciencias.
        </p>

        <div className={style.remarque}>
          <p>
            Una ciencia es producto de razonamientos y discursos. En este caso
            de argumentos. El nucleo de la lógica es el argumento y el argumento
            es el cimiento de las ciencias. Por consiguiente, la lógica es la
            base de todas las ciencias.
          </p>
        </div>
      </article>

      <article className={style.fora}>
        <h3>¿Qué es una proposición o enunciado lógico?</h3>

        <p>
          Es una expresión con valor informativo que puede ser{" "}
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
          <span className={style.remarque}>
            "Argentina forma parte de America del Sur"
          </span>
          .
        </p>
        <p>
          <b>
            <u>Proposiciones complejas</u>
          </b>
          : son el resultado de varias proposiciones simples, unidas por uno o
          más conectores lógicos. Por ejemplo:{" "}
          <span className={style.remarque}>
            "Argentina forma parte de America del sur y limita con cinco paises
            de este"
          </span>
          .
        </p>

        <p>
          Las proposiciones son representadas con letras en minúsculas. (p, q,
          r, s, t, u, etc)
        </p>

        <h3>Conectores Lógicos</h3>

        <table>
          <thead>
            <tr>
              <th>Negación</th>
              <th>Conjunción</th>
              <th>Disyunción</th>
              <th>Disyunción Excluyente</th>
              <th>Condicional</th>
              <th>Bicondicional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>~P</td>
              <td>P &#8743; Q</td>
              <td>P V Q</td>
              <td>P &#8891; Q</td>
              <td>P &#8594; Q</td>
              <td>P ↔ Q</td>
            </tr>
            <tr>
              <td>No P</td>
              <td>P y Q</td>
              <td>P o Q</td>
              <td>P o Q no ambas</td>
              <td>P entonces Q</td>
              <td>P si y solo si Q</td>
            </tr>
          </tbody>
        </table>

        <h3>Tabla de verdad</h3>

        <table>
          <thead>
            <tr>
              <th>P</th>
              <th>Q</th>
              <th>P &#8743; Q</th>
              <th>P V Q</th>
              <th>P &#8891; Q</th>
              <th>P &#8594; Q</th>
              <th>P ↔ Q</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <ul className={style.listas}>
          <li>
            Siempre que se niegue, el valor será el{" "}
            <span className={style.remarque}>contrario</span> del que ya tenga.
          </li>
          <li>
            Siempre que se compare <span className={style.remarque}>P y Q</span>
            , ambos deben valer 1 para que su resultado de 1. Sino, es 0.
          </li>
          <li>
            Siempre que se compare <span className={style.remarque}>P o Q</span>
            , almenos uno debe valer 1 para que su resultado sea 1. Sino, es 0.
          </li>
          <li>
            Siempre que se compare{" "}
            <span className={style.remarque}>P o Q, no ambas</span>, una de las
            dos debe valer 1 para que su resultado de 1. Si son iguales, es 0.
          </li>
          <li>
            Siempre que se compare{" "}
            <span className={style.remarque}>P entonces Q</span>, y el primer
            valor sea 1 y el segundo 0, va a valer 0. Todos los demas valen 1.
          </li>
          <li>
            Siempre que se compare{" "}
            <span className={style.remarque}>P si y solo si Q</span>, ambos
            deben valer igual para que su resultado de 1. Sino, es 0.
          </li>
        </ul>
      </article>
    </Content>
  </Layout>
);

export default Proposicional;
