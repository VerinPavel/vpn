import { Typography } from '@/shared/types';
import styles from './Subtitle.module.scss';

interface TypographyProps {
  text: Typography;
}

const Subtitle = ({ text }: TypographyProps) => {
  return (
    <h4 className={styles.h4} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export { Subtitle };
