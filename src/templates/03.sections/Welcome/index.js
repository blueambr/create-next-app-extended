import styles from './Welcome.module.scss';

const Welcome = ({ data }) => {
  const { title, subtitle, columns } = data;

  return (
    <section className={styles.welcome}>
      <div className="container">
        <div className={styles.wrapper}>
          <section className="section">
            <div className="block">
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className="block">
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </section>
          <section className="section">
            <div className="columns is-centered">
              <div className="column is-four-fifths-tablet is-three-quarters-desktop is-three-fifths-widescreen">
                <div className="columns is-multiline">
                  {columns.map((column) => (
                    <div className="column is-half" key={column.key}>
                      <a
                        className={styles.card}
                        href={column.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="block-sm">
                          <h3 className={styles.card__title}>
                            {column.title} &rarr;
                          </h3>
                        </div>
                        <div className="block-sm">
                          <p className={styles.card__desc}>{column.desc}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
