import styled from "@emotion/styled";
import { Colors, FontSizeIndex } from "../../theme/types";

type Text = {
  color?: Colors,
  align?: 'center' | 'right' | 'left' | 'justify',
  font?: FontSizeIndex
};

const TextComponent = styled.p<Text>(({ theme, color = 'black', align = 'right', font = 2 }) => ({
  color: theme.palette[color],
  textAlign: align,
  fontSize: theme.font.size(font),
}));

export default TextComponent;