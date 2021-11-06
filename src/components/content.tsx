import styled from "@emotion/styled";
import Text from "./utils/Text";

const ContentWrapper = styled.div(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

export default function Content(){
  return (
    <ContentWrapper>
      <Text color="gray2">گردش حساب</Text>
      
    </ContentWrapper>
  );
};