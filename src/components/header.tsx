import styled from '@emotion/styled';

const HeaderWrapper = styled.header(({ theme }) => ({
  backgroundColor: theme.palette['navyBlue'],
  padding: theme.spacing(2),
  color: theme.palette['white'],
}));

export default function Header(){
  return (
    <HeaderWrapper>
      test
    </HeaderWrapper>
  );
};