import { H1, H2, HomeParallax } from "./styled"
import { useRef, useState, useEffect } from "react";
import { useText } from "../../contexts/TextContext";

export const Presentation = () => {
  const { titles } = useText();


  const config = {
    duration: 1000
  }

  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const [configScrollReveal, setConfigScrollReveal] = useState<any>(config);

  useEffect(() => {
    async function animate() {
      if (h1Ref.current && h2Ref.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(h1Ref.current, configScrollReveal);
        sr().reveal(h2Ref.current, configScrollReveal);
      }
    }

    animate();
  }, []); 

  return (
    <HomeParallax id="Home" title="Home Section" aria-label="Seção Inicial">
      <H1 ref={h1Ref}>Lucas Gabriel</H1>
      <H2 ref={h2Ref}>{titles.subtitleHome}</H2>
    </HomeParallax>

  )
}