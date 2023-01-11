import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/UseMediaQueryHook";
import { Service } from "../../models/Services";
import TitleWithSubtitle from "../Shared/TitleWithSubTitle/Index";
import { Service as ServiceBox } from "./components/Service";
import { Container, Content, ServiceSection, TextContainer } from "./style";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { StyledModal } from "../../styles/global";


export function Services () {

  const listServices: Service[] = [
    {
      id: 1,
      imgDescription: "Back-End development image",
      img: "Images/ServerImg.png",
      title: "Desenvolvimento Back-End",
      descriptionService: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel rhoncus eros, eu molestie magna. Vivamus sit amet suscipit nulla. Sed porta commodo diam in finibus.
      In velit nisl, egestas ut ipsum sed, laoreet porttitor magna. Morbi elit tellus, aliquam in nisi eu, aliquet cursus erat. Nulla lorem magna, luctus pretium finibus et, ultrices sit amet mi.
      Cras vitae libero a risus suscipit facilisis eget a ligula. In eget magna viverra mi accumsan porta. Aenean eu aliquet velit. Integer at nibh consequat, consequat nunc at, maximus nisl.`
    },
    {
      id: 2,
      imgDescription: "Front-End development image",
      img: "Images/FrontEndImg.png",
      title: "Desenvolvimento Front-End",
      descriptionService: `Donec scelerisque tincidunt elit, sed venenatis magna tincidunt eget. Aliquam ultricies dolor erat, in convallis erat pulvinar nec. Suspendisse consectetur posuere enim, non fermentum turpis. Quisque scelerisque odio ut odio iaculis feugiat. Sed quam mi, pellentesque viverra nunc quis, efficitur consequat quam. Fusce diam orci, rhoncus vel dolor eget, faucibus lobortis nibh. Morbi eu faucibus odio. Aenean tincidunt luctus risus, nec gravida risus volutpat in. Vivamus rutrum vel diam in varius. Ut ac lacus at orci volutpat interdum rutrum nec magna.`
    },
    {
      id: 3,
      imgDescription: "Server image",
      img: "Images/database.png",
      title: "Modelagem Banco de dados",
      descriptionService: `Nulla facilisi. Praesent in libero id erat lacinia cursus a id nibh. Aenean laoreet sem condimentum malesuada malesuada. Aliquam sit amet magna risus. Maecenas laoreet ex nec nunc vestibulum, vitae semper quam faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elit felis, consectetur sit amet risus vel, molestie convallis orci. In malesuada dui nec mauris placerat, sit amet interdum augue lacinia. Sed posuere convallis dignissim. Integer feugiat sem erat. Donec vitae erat enim. Vivamus aliquam feugiat dolor, nec auctor lacus porta vel. Donec ac malesuada quam.`
    }
  ]
  
  const isMobileVersion: boolean = useMediaQuery(920);

  const [descriptionText, setDescriptionText] = useState<string>();
  const [services, setServices] = useState(listServices);

  const serviceRef = useRef(null);
  const textRef = useRef(null);

  const eventHoverHandler = (serviceId: number) => {
    const currentServiceHover = listServices.find(s => s.id === serviceId);
    setDescriptionText(currentServiceHover?.descriptionService);

  }

  SwiperCore.use([Navigation, Pagination]);

  useEffect(() => {
    async function animate() {
      if(serviceRef.current && textRef.current) {
        const sr = (await import("scrollreveal")).default;
        const scrollEfectConfig = { duration: 3000,
          distance: '150%',
          origin: 'bottom'
        }
        sr().reveal(serviceRef.current, { rotate: { x: 20, y: 20, z: 20}, ...scrollEfectConfig});
        sr().reveal(textRef.current, scrollEfectConfig);
      }
    }
    animate();
    
  }, [])

  const [realIndex, setRealIndex] = useState(0);
  useEffect(() => {
    eventHoverHandler(realIndex);
  }, [realIndex])


  return (

    <ServiceSection id="Services">
      <Container>
        <TitleWithSubtitle title={'O que eu faço'} subTitle={'Meus serviços'} />
        {
          !isMobileVersion ? (
            <Content ref={serviceRef}>
              {
                  services.map(service => (
                    <ServiceBox 
                      key={service.id} 
                      id={service.id}
                      img={service.img}
                      description={service.imgDescription}
                      title={service.title}
                      eventHover={eventHoverHandler}
                    />
                  )) 
              }
            </Content>
          )
          : (
            <Content ref={serviceRef}>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                onActiveIndexChange={(core) => { 
                  const index = core.realIndex + 1;
                  setRealIndex(index);
                }}
                pagination={{ clickable: true}}
                navigation={true}
                style={{display: 'flex', maxWidth: '500px', width: '100%'}}
              >        
                {
                  services.map(service => (
                    <SwiperSlide key={service.id}>
                      <ServiceBox  
                        id={service.id}
                        img={service.img}
                        description={service.imgDescription}
                        title={service.title}
                        eventHover={eventHoverHandler}
                      />
                    </SwiperSlide>
                  )) 
              }
              </Swiper>
            </Content>           
          )
        }
        <TextContainer ref={textRef}>
          <p>{descriptionText}</p>
        </TextContainer>
        
      </Container>
    </ServiceSection>
  )
}
