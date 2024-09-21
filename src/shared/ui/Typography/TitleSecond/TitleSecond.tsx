import { Typography } from '@/shared/types';
import styles from './TitleSecond.module.scss';

interface TypographyProps {
  text: Typography;
  align: 'center' | 'right' | 'start';
}

const TitleSecond = ({ text, align }: TypographyProps) => {
  return (
    <h3
      style={{ textAlign: align }}
      className={styles.h3}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export { TitleSecond };
