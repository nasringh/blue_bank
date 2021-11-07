import styled from "@emotion/styled";
import { ReportItemType } from "./content";
import Flex from "./utils/Flex";
import Icon from "./utils/Icon";
import TextComponent from "./utils/Text";

const Row = styled(Flex)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderBottom: `solid 1px ${theme.palette['gray3']}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

type ReportItemComponent = ReportItemType & { 
  handleClick: (item: ReportItemType) => any,
};

export default function ReportItem({ handleClick, ...report }: ReportItemComponent){
  const { date, isWithdrawal } = report;
  const color = isWithdrawal ? 'error' : 'success';
  const itemDate = new Date(date).toLocaleDateString('fa-IR');
  
  return (
    <Row justify="space-between" align="center" onClick={() => handleClick(report)}>
      <Flex align="center">
        <Icon
          name={isWithdrawal ? 'icon-arrow-down-right' : 'icon-arrow-up-left'}
          color={color}
         />
         <div>
           <TextComponent font={1}>{isWithdrawal ? 'برداشت' : 'واریز'}</TextComponent>
           <TextComponent color="gray2" font={0}>{itemDate}</TextComponent>
         </div>
      </Flex>
      <Flex align="center">
        <TextComponent color={isWithdrawal ? 'gray1' : 'success'} font={1}>
          ۵,۰۰۰,۰۰۰{isWithdrawal ? '-' : '+'} ریال
        </TextComponent>
        <Icon name="icon-chevron-left-solid" color="gray2" size={1} />
      </Flex>
    </Row>
  );
};  