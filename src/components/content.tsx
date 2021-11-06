import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ReportsCall } from "../api";
import ReportItem from "./reportItem";
import TextComponent from "./utils/Text";

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
  const [reports,setReports] = useState<ReportItemType[]>([]);

  useEffect(() => {
    ReportsCall({_page: 1,_limit: 10})
      .then(({ data }: any) => setReports([...reports, data]));
  }, []);  

  return (
    <ContentWrapper>
      <TextComponent color="gray2">گردش حساب</TextComponent>
      {
        reports?.map(( report, index ) => (
          <ReportItem key={index} {...report} />
        ))
      }
    </ContentWrapper>
  );
};