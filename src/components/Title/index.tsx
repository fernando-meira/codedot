import * as S from './styles';

interface TitleProps {
  content: React.ReactNode;
}

export default function Title({ content }: TitleProps) {
  return <S.Container dangerouslySetInnerHTML={{ __html: String(content) }} />;
}
