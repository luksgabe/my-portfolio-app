import { MutableRefObject } from "react";
import { Box, Image } from "./style"

interface IServiceProps {
  id: number;
  img: string;
  title: string;
  description: string;
  eventHover: (serviceId: number) => void;
}

export const Service = ({ id, img, title, description, eventHover }: IServiceProps) => {
  return (
    <Box onMouseEnter={() => eventHover(id)}>
      <Image src={img} alt={description}/>
      <span>{title}</span>
    </Box>
  )  
}