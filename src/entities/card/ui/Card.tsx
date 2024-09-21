import { Subtitle, TitleFirst } from '@/shared/ui/Typography';
import styels from './Card.module.scss';

interface CardProps {
  img: string;
  title: string;
  subtitle: string;
}

const Card = ({ img, title, subtitle }: CardProps) => {
  return (
    <div className={styels.card}>
      <div dangerouslySetInnerHTML={{ __html: img }} />
      <TitleFirst text={title} />
      <Subtitle text={subtitle} />
    </div>
  );
};

export { Card };
