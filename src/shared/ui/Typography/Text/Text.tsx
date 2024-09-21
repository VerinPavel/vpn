import { Typography } from '@/shared/types';
import styles from './Text.module.scss';

interface TypographyProps {
  text: Typography;
}

const Text = ({ text }: TypographyProps) => {
  return (
    <h6 className={styles.h6} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export { Text };
