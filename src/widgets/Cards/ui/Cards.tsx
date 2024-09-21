import { Card } from '@/entities/card';
import styles from './Cards.module.scss';
import { data } from '../lib/mock';

const Cards = () => {
  return (
    <section className={styles.cards}>
      {data.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </section>
  );
};

export { Cards };
