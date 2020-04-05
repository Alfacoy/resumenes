import style from "./style.scss";

const Footer = () => (
  <footer className={style.footer}>
    <p>Make with *love* by BD</p>
    <p>
      Powered by
      <a href="https://nextjs.org/" target="_blank">
        {" "}
        <b>Next</b>
      </a>
    </p>
  </footer>
);

export default Footer;
