import styles from '@/shared/styles/Home.module.scss';
import Head from 'next/head';
import { Header } from '@/shared/ui/Header';
import { HomeSection } from '@/widgets/HomeSection';
import { Cards } from '@/widgets/Cards';
import { TitleSecond } from '@/shared/ui/Typography';
import { ChooseNameSection } from '@/widgets/ChooseNameSection';
import { fetchUsers } from '@/shared/api/fetchUsers';
import { User } from '@/shared/types';

interface HomePageProps {
  users: User[];
}

export default function Home({ users }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Best VPN</title>
        <meta name="description" content="Get the best VPN ever" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <HomeSection />
        <Cards />
        <TitleSecond text="Millions of people trust us!" align="center" />
        <ChooseNameSection users={users} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const users = await fetchUsers();

  return {
    props: {
      users,
    },
  };
};
