import Head from "next/head";
import Link from "next/link";
import style from "./style.scss";

const Header = () => (
  <header className={style.header}>
    <Head>
      <title>Resumenes</title>
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Link href="/">
      <h1>Resumenes</h1>
    </Link>
  </header>
);

export default Header;
