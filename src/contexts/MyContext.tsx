import { TextProvider } from "./TextContext";
import { ModalProvider } from 'styled-react-modal';
import { FadingBackground } from "../styles/global";

export const MyContext = ({ children }: any) => {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <TextProvider>
        {children}
      </TextProvider>
    </ModalProvider>
  )
}