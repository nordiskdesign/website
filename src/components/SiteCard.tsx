import { useEffect, useRef, useState } from 'react'
import type { Site } from '../data/sites'
import styles from './SiteCard.module.css'

const IFRAME_WIDTH = 1440

interface Props {
  site: Site
}

export function SiteCard({ site }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.25)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / IFRAME_WIDTH)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <article className={styles.card}>
      <div className={styles.preview} ref={wrapperRef}>
        <iframe
          src={site.url}
          title={site.name}
          className={styles.iframe}
          style={{ transform: `scale(${scale})` }}
          loading="lazy"
          tabIndex={-1}
        />
        <div className={styles.overlay} />
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
