import styled from '@emotion/styled';

type FlexAlign = 'center' | 'flex-start' | 'flex-end' | 'stretch';
type FlexJustify = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type FlexType = {
  justify?: FlexJustify,
  align?: FlexAlign,
  direction?: FlexDirection,
  nowrap?: boolean,
};

const Flex = styled.div<FlexType>(({ justify = 'flex-start', align = 'stretch', direction = 'row', nowrap }) => ({
  display: 'flex',
  justifyContent: justify,
  alignItems: align,
  flexDirection: direction,
  flexWrap: nowrap ? 'nowrap' : 'wrap',
}));

export default Flex;