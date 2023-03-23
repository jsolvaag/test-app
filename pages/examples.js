import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
         <img className={styles.image} src="data:image/jpeg;base64,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" /> 
          Get started by editing <code>pages/index.js</code>
        </p>

        <p className={styles.description}>
         <img className={styles.images} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fmusicians%2Fmichael-jackson&psig=AOvVaw1ffAKSuadwXN7LVtAru8m0&ust=1679565437540000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNivi_ui7_0CFQAAAAAdAAAAABAE " />
                   Get started by editing <code>pages/index.js</code>
                   </p>   


                    className= {"styles.description"}
         <img className={styles.micaljakson} src="https://hips.hearstapps.com/hmg-prod/images/michael-jackson-gettyimages-89446104.jpg?resize=1200:* " />
           started by editing <code>pages/index.js</code>
                  
                   
          

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>micaljakson death
               &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn about micaljakson&rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href= "/examples"
            className={styles.card}
          >
            <h3>Examples of micaljakson skins in the new call of duti &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Deploy micaljakson in the new call of duti 2 &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
      </div>
  )
}