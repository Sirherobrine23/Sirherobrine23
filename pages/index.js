import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Home page" />
      </Head>

      <main className={styles.main}>
        <h1>Hello</h1>
        <p>
          This page is work progress, and deploy in github pages.
        </p>
      </main>
    </div>
  )
}
