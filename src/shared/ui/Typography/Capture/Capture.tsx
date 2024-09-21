import { Typography } from '@/shared/types';
import styles from './Capture.module.scss';

interface TypographyProps {
  text: Typography;
}

const Capture = ({ text }: TypographyProps) => {
  return <p className={styles.p} dangerouslySetInnerHTML={{ __html: text }} />;
};

export { Capture };
