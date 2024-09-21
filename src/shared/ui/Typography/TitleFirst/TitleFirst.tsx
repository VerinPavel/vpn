import { Typography } from '@/shared/types';
import styles from './TitleFirst.module.scss';

interface TypographyProps {
  text: Typography;
}

const TitleFirst = ({ text }: TypographyProps) => {
  return (
    <h2 className={styles.h2} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export { TitleFirst };
