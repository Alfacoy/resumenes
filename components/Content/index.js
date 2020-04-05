import style from "./style.scss";

const Content = (props) => (
  <section className={style.content}>{props.children}</section>
);

export default Content;
