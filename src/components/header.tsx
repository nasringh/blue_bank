import styled from '@emotion/styled';
import Flex from './utils/Flex';
import IconButton from './utils/IconButton';
import Text from './utils/Text';

const HeaderWrapper = styled.header(({ theme }) => ({
  backgroundColor: theme.palette['navyBlue'],
  padding: theme.spacing(2, 2, 1, 2),
  color: theme.palette['white'],
  borderRadius: '0 0 1rem 1rem',
}));

type Header = {
  title?: string,
};

export default function Header({ title }: Header){
  return (
    <HeaderWrapper>
      <Flex justify="space-between" align="center">
        <IconButton color="white"><span className="icon-arrow-right2" /></IconButton>
        <Text color="white">{title}</Text>
        <div>
          <IconButton color="white"><span className="icon-search" /></IconButton>
          <IconButton color="white"><span className="icon-ellipsis" /></IconButton>
        </div>
      </Flex>
    </HeaderWrapper>
  );
};