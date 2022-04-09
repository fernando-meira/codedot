import * as S from './styles';

interface CommonProps {
  content: React.ReactNode;
}

export function Title({ content }: CommonProps) {
  return <S.Title dangerouslySetInnerHTML={{ __html: String(content) }} />;
}

export function Subtitle({ content }: CommonProps) {
  return <S.Subtitle dangerouslySetInnerHTML={{ __html: String(content) }} />;
}

export function SectionTitle({ content }: CommonProps) {
  return (
    <S.SectionTitle dangerouslySetInnerHTML={{ __html: String(content) }} />
  );
}
