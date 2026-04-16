import { SiteCard } from './components/SiteCard'
import { sites } from './data/sites'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Nordisk Design</h1>
        <p className={styles.tagline}>Web development for small businesses</p>
      </header>
      <main>
        <ul className={styles.grid}>
          {sites.map((site) => (
            <li key={site.id}>
              <SiteCard site={site} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
