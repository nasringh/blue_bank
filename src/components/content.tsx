import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ReportsCall } from "../api";
import Text from "./utils/Text";

export type ReportItemType = {
  id: 1,
  date: string,
  amount: number,
  isWithdrawal: boolean,
  tracking_code: number,
  reference_number: string,
};

const ContentWrapper = styled.div(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

export default function Content(){
  const [reports,setReports] = useState<ReportItemType[]>();

  useEffect(() => {
    ReportsCall({_page: 1,_limit: 10})
      .then((response: any) => console.log('response: ', response))
      .catch((error: any) => console.log('error: ', error));
  }, []);  

  return (
    <ContentWrapper>
      <Text color="gray2">گردش حساب</Text>

    </ContentWrapper>
  );
};