import styled from "@emotion/styled";
import { Colors, FontSizeIndex } from "../../theme/types";

type IconType = {
  name: string,
  color?: Colors,
  size?: FontSizeIndex,
};

const IconElement = styled.span<Omit<IconType, 'name'>>(({ theme, size = 2, color = 'black' }) => ({ 
  color: theme.palette[color],
  fontSize: theme.font.size(size),
 }));

 export default function Icon({ name, color, size }: IconType){
   return (
     <IconElement  className={name} color={color} size={size} />
   );
 };

