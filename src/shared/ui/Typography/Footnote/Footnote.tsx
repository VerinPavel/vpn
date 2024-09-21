import { Typography } from '@/shared/types';
import styles from './Footnote.module.scss';

interface TypographyProps {
  text: Typography;
}

const Footnote = ({ text }: TypographyProps) => {
  return <p className={styles.p} dangerouslySetInnerHTML={{ __html: text }} />;
};

export { Footnote };
