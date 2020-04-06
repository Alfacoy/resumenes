import style from "./style.scss";

const Footer = () => (
  <footer className={style.footer}>
    <div>
      <article>
        <p>
          Make with{" "}
          <img src="https://img.icons8.com/material-rounded/24/000000/hearts.png" />{" "}
          by BD
        </p>
        <p>
          Powered by
          <a href="https://nextjs.org/" target="_blank">
            {" "}
            <b>Next</b>
          </a>
        </p>
      </article>
    </div>
  </footer>
);

export default Footer;
