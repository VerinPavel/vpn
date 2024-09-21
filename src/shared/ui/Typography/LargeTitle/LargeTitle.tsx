import { Typography } from '@/shared/types';
import styles from './LargeTitle.module.scss';

interface TypographyProps {
  text: Typography;
}

const LargeTitle = ({ text }: TypographyProps) => {
  return (
    <h1 className={styles.h1} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export { LargeTitle };
