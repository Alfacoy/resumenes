import Link from "next/link";
import style from "./style.scss";

const Header = () => (
  <header className={style.header}>
    <Link href="/">
      <h1>Resumenes</h1>
    </Link>
  </header>
);

export default Header;
