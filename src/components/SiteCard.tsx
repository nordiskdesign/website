import type { Site } from '../data/sites'
import styles from './SiteCard.module.css'

interface Props {
  site: Site
}

export function SiteCard({ site }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.preview} aria-hidden="true">
        <span className={styles.initial}>{site.name[0]}</span>
      </div>
      <div className={styles.body}>
        <h2 className={styles.name}>{site.name}</h2>
        <p className={styles.description}>{site.description}</p>
        <div className={styles.footer}>
          <ul className={styles.tags}>
            {site.tags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Visit ↗
          </a>
        </div>
      </div>
    </article>
  )
}
