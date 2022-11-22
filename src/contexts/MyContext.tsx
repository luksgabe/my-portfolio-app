import { TextProvider } from "./TextContext"

export const MyContext = ({ children }: any) => {
  return (
    <TextProvider>
      {children}
    </TextProvider>
  )
}