import { Footnote } from '@/shared/ui/Typography';
import styles from './EmaiInput.module.scss';
import { ChangeEvent } from 'react';
import { Note } from '../icons/Note/Note';

interface EmailInputProps {
  setEmailValue: (param: string) => void;
  emailValue: string;
}

const EmailInput = ({ setEmailValue, emailValue }: EmailInputProps) => {
  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEmailValue(event.target.value)
        }
        value={emailValue}
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
        required
      />
      <div className={styles.note}>
        <Note />
        <Footnote text="Your information is 100% secure. We don’t share your personal information." />
      </div>
    </div>
  );
};

export { EmailInput };
