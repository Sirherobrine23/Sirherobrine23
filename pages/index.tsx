import Head from "next/head";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sirherobrine23</title>
        <meta name="description" content="Sirherobrine23" />
      </Head>
      <div>
        <h1>Quem é Sirherobrine23?</h1>
        <div>
          Sou <code>Matheus Sampaio Queiroga</code>, desenvolvedor de Back-end em Javascript e Typescript. Cursando <code>Análise e desenvolvimento de Sistemas</code> na Anhanguera Educacional.
        </div>
        <br/>
        <div>
          Com um pouco de experiência em Front-end com NextJS.
        </div>
        <br/>
        <div>
          Tenho alguns projetos em andamento, como o <Link href="/BdsProject"><code>Bds Maneger</code></Link> que nada mais do que um gerenciador de servidores de Minecraft Java e Bedrock, além de alguns outros projetos paralelos entre eles (ou não).
        </div>
        <br/>
        <div>
          E um outro projeto que se destaca é o <Link href="https://github.com/Sirherobrine23/apt-stream"><code>Apt-Stream</code></Link> que hospeda seu repositorio debian/ubuntu sem necessidade de baixa algun arquivo e criar manualmente o repositorio, basta hospedar os arquivos finais no Github Release, Oracle Bucket, Google Drive e outros.
        </div>
      </div>
    </>
  )
}
