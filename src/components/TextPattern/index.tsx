import * as S from './styles';

interface CommonProps {
  content: React.ReactNode;
}

interface DateTextProps {
  children: Date | string;
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

export function DateText({ children }: DateTextProps) {
  return <S.DateText>{children}</S.DateText>;
}

export function SummaryTitle({ content }: CommonProps) {
  return (
    <S.SummaryTitle dangerouslySetInnerHTML={{ __html: String(content) }} />
  );
}

export function Summary({ content }: CommonProps) {
  return <S.Summary dangerouslySetInnerHTML={{ __html: String(content) }} />;
}

export function SpanText({ content }: CommonProps) {
  return <S.SpanText dangerouslySetInnerHTML={{ __html: String(content) }} />;
}
