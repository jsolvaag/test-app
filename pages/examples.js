import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href='/' style={{color: "white", fontSize: "large", position: "absolute", left: '20px', top: '20px'}}>
      &larr; Tilbake
      </a>

      <iframe width="1000px" height="700px" src="https://www.youtube.com/embed/h_D3VFfhvs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </div>
  )
}


        