import styles from './ChooseNameSection.module.scss';
import { Subtitle, TitleFirst } from '@/shared/ui/Typography';
import { Btn } from '@/shared/ui/Btn';
import { useState } from 'react';
import { Modal } from '@/features/Modal';
import { TogglerState, User } from '@/shared/types';
import { NotActiveTogler } from '@/shared/ui/icons/NotActiveTogler/NotActiveTogler';
import { ActiveTogler } from '@/shared/ui/icons/ActiveTotgler/ActiveTogler';

interface ChooseNameSectionProps {
  users: User[];
}

const ChooseNameSection = ({ users }: ChooseNameSectionProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [toggler, setToggler] = useState<TogglerState>({});
  const [selectedName, setSelectedName] = useState('');

  const handleClick = (id: number, name: string) => {
    setSelectedName(name);

    const newToggler: TogglerState = {};
    newToggler[id] = !toggler[id];

    Object.keys(toggler).forEach((key) => {
      if (parseInt(key) !== id && toggler[parseInt(key)]) {
        newToggler[parseInt(key)] = false;
      }
    });

    setToggler(newToggler);
  };

  if (!users) return null;

  return (
    <section id="GetVPN" className={styles.section}>
      <div className={styles.titleWrap}>
        <TitleFirst text="Choose <span>your Name</span>" />
      </div>
      {users.map((user) => {
        const userId = user.id.value;
        const userName =
          user.name.title + ' ' + user.name.first + ' ' + user.name.last;

        return (
          <div
            key={userId}
            className={styles.checkbox}
            onClick={() => handleClick(userId, userName)}
          >
            {toggler[userId] ? <NotActiveTogler /> : <ActiveTogler />}
            <Subtitle text={userName} />
          </div>
        );
      })}
      <div className={styles.btnWrap}>
        <Btn
          onClick={() => setOpenModal(true)}
          text="Get VPN"
          disabled={!selectedName}
        />
      </div>
      <Modal
        isActive={openModal}
        userName={selectedName}
        handleCloseModal={() => setOpenModal(false)}
      />
    </section>
  );
};

export { ChooseNameSection };
