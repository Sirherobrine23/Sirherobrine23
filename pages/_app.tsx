import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import NavbarCSS from "../styles/Navbar.module.css";
import "../styles/globals.css";

export type itemsConfig = {
  name: string,
  url?: string,
  onClick?: () => void,
  svg?: JSX.Element,
  id?: string
};

export default function MainAPP({ Component, pageProps }: AppProps) {
  const navBarItens: itemsConfig[] = [
    {
      name: "Github",
      url: "https://github.com/Sirherobrine23",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    }
  ];
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Loading Sirherobrine23 website</title>
      </Head>
      <nav className={NavbarCSS["navigation"]}>
        <Link href="/" className={NavbarCSS["brand-name"]}>Sirherobrine23</Link>
        <button className={NavbarCSS["hamburger"]}>
          {/* icon from heroicons.com */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
        </button>
        <div
          className={NavbarCSS["navigation-menu"]}>
          <ul>{navBarItens.map((compo, index) => {
            return <li key={index}>
              <Link href={compo.url||"#"} target="_blank">{compo.svg} {compo.name}</Link>
            </li>;
          })}</ul>
        </div>
      </nav>
      <div><Component {...pageProps} /></div>
    </div>
  )
}