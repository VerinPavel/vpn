import styles from './Modal.module.scss';
import { Body, TitleFirst } from '@/shared/ui/Typography';
import { Btn } from '@/shared/ui/Btn';
import { EmailInput } from '@/shared/ui/EmaiInput/EmaiInput';
import { Close } from '@/shared/ui/icons/Close/Close';
import { FormEvent, useState } from 'react';

interface ModalProps {
  isActive: boolean;
  handleCloseModal: () => void;
  userName: string;
}

const Modal = ({ isActive, userName, handleCloseModal }: ModalProps) => {
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log('emailValue:', emailValue);
    setEmailValue('');
    // handleCloseModal(); Можем еще закрывать модалку
  };

  if (!isActive) return null;

  return (
    <div className={styles.modalWrap}>
      <div className={styles.modal}>
        <div className={styles.iconWrapper}>
          <Close handleClose={handleCloseModal} />
        </div>
        <div className={styles.container}>
          <TitleFirst text="Your name" />
          <Body text={userName} />
          <form className={styles.form} onSubmit={handleSubmit}>
            <EmailInput setEmailValue={setEmailValue} emailValue={emailValue} />
            <div className={styles.btnWrap}>
              <Btn text=" Continue" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Modal };
