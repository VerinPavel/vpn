import { Body, LargeTitle } from '@/shared/ui/Typography';
import styles from './HomeSection.module.scss';
import { Btn } from '@/shared/ui/Btn';
import Image from 'next/image';
import MyImage from '../../../../public/image.webp';
import { Home } from '@/shared/ui/icons/Home/Home';

const HomeSection = () => {
  return (
    <section id="Home" className={styles.home}>
      <div className={styles.textWrap}>
        <LargeTitle text="Access <span>everything <br/> securely </span> with <br/> VPN" />
      </div>
      <Image src={MyImage} alt="man" />
      <div className={styles.wrap}>
        <Btn text=" Get VPN" />
        <Home />
        <Body text=" VPN-your <span> ultimate </span> solution for a private and secure online experience!" />
      </div>
    </section>
  );
};

export { HomeSection };
