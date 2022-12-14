import { H1, H2, TitleSubtitleContainer } from "./style";

interface ITitleWithSubtitleProps {
  title: string;
  subTitle: string;
  color?: string;
}

export default function TitleWithSubtitle({ title, subTitle, color }: ITitleWithSubtitleProps){
  return (
    <TitleSubtitleContainer>
      <H1 $colorValue={color}>{title}</H1>
      <H2 $colorValue={color}>{subTitle}</H2>
    </TitleSubtitleContainer>
  )
}