import { createContext, useContext, useEffect, useState } from "react";
import { IText } from "../interfaces/IText";
import { messages } from "../translate/languages"

const Context = createContext<IText>({} as IText);

export const TextProvider = ({ children }: any): JSX.Element => {
  //navbar
  const [home, setHome] = useState("");
  const [about, setAbout] = useState("");
  const [services, setServices] = useState("");
  const [experiences, setExperiences] = useState("");
  const [contact, setContact] = useState("");
  
  //titles
  const [subtitleHome, setSubTitleHome] = useState("");

  const navbar = {
    home,
    about,
    services,
    experiences,
    contact,
  }

  const titles = {
    subtitleHome,
  }

  useEffect(() => {
    const I18N_STORAGE_KEY = "i18nextLng";
    const browserLanguage = localStorage.getItem(I18N_STORAGE_KEY)?.split("-") as string[];
    const languageMessages: IText = messages[browserLanguage[0]] as IText;
    
    //navbar
    setHome(languageMessages.navbar.home);
    setAbout(languageMessages.navbar.about);
    setServices(languageMessages.navbar.services);
    setExperiences(languageMessages.navbar.experiences);
    setContact(languageMessages.navbar.contact);
    
    //titles
    setSubTitleHome(languageMessages.titles.subtitleHome);
  }, []);

  return (
    <Context.Provider 
      value = {{ navbar, titles }}>
        { children }
    </Context.Provider>

  )
}

export const useText = () => {
  const context = useContext(Context);
  return context;
}