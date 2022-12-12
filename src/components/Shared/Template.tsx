import { ReactElement } from "react";
import { Main, Wrapper } from "../../styles/template";
interface ITemplate {
  children: Array<ReactElement> | ReactElement
}


export default function Template({ children }: ITemplate) {
  return (
    <Wrapper>
      <Main>
        { children }
      </Main>
    </Wrapper>  
  )
}