import { H1, H2 } from "./style";

interface ITitleWithSubtitleProps {
  title: string;
  subTitle: string;
}

export default function TitleWithSubtitle({ title, subTitle }: ITitleWithSubtitleProps){
  return (
    <div>
      <H1>{title}</H1>
      <H2>{subTitle}</H2>
    </div>
  )
}