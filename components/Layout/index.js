import Aside from "../Aside";
import style from "./style.scss";

const Layout = (props) => (
  <main className={style.grid}>
    <Aside />
    {props.children}
  </main>
);

export default Layout;
