import styles from './Btn.module.scss';

interface BtnProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Btn = ({ text, disabled, onClick }: BtnProps) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
export { Btn };
