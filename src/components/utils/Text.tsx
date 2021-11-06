import styled from "@emotion/styled";
import { Colors } from "../../theme/types";

type Text = {
  color?: Colors,
  align?: 'center' | 'right' | 'left' | 'justify',
};

const TextComponent = styled.p<Text>(({ theme, color = 'black', align = 'right' }) => ({
  color: theme.palette[color],
  textAlign: align,
  fontSize: theme.font.size(2),
}));

export default TextComponent;