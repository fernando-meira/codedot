import * as S from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle?: string;
};

export default function Banner({ image, title, subtitle }: BannerProps) {
  return (
    <S.Container>
      <S.Image src={image} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>

        {subtitle && (
          <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
      </S.Caption>
    </S.Container>
  );
}
