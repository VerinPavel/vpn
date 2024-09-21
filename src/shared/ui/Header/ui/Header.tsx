import { Subtitle } from '@/shared/ui/Typography';
import styles from './Header.module.scss';
import { HeaderBtn } from '../../HeaderBtn';
import { Logo } from '../../icons/Logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#Home" className={styles.logo}>
        <Logo />
        <Subtitle text="VPN" />
      </a>
      <HeaderBtn />
    </header>
  );
};
export { Header };
