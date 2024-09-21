import { Typography } from '@/shared/types';
import styles from './Body.module.scss';

interface TypographyProps {
  text: Typography;
}

const Body = ({ text }: TypographyProps) => {
  return (
    <h4 className={styles.h4} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export { Body };
