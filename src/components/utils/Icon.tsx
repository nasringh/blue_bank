import styled from "@emotion/styled";
import { Colors, FontSizeIndex } from "../../theme/types";

type IconType = {
  name: string,
  color?: Colors,
  size?: FontSizeIndex,
};

const Icon = styled.span<IconType>(({ theme, name }) => ({ 

 }));