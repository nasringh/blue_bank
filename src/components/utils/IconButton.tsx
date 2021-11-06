import styled from "@emotion/styled";
import { Colors } from "../../theme/types";

type Button = {
  color?: Colors,
};

const IconButton = styled.button<Button>(({ theme, color = 'black' }) => ({
  color: theme.palette[color],
  border: 'none',
  backgroundColor: 'transparent',
}));

export default IconButton;