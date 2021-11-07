import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ReportsCall } from "../api";
import Modal from "./modal";
import ReportItem from "./reportItem";
import TextComponent from "./utils/Text";

export type ReportItemType = {
  id: number,
  date: string,
  amount: number,
  isWithdrawal: boolean,
  tracking_code: number,
  reference_number: string,
};

const Title = styled(TextComponent)(({ theme }) => ({
  padding: theme.spacing(0 , 2),
}));

const initialSelectedReport = {
  id: 0,
  date: '',
  amount: 0,
  isWithdrawal: false,
  tracking_code: 0,
  reference_number: '',
};

export type ModalStateType = {
  open: boolean,
  price: number,
  data: ReportItemType
};

export default function Content(){
  const [reports,setReports] = useState<ReportItemType[]>([]);
  const [modalState, setModalState] = useState<ModalStateType>({
    open: false,
    price: 5000000,
    data: initialSelectedReport
  });

  const handleClickReport = (item: ReportItemType) => {
    setModalState({
      ...modalState,
      open: true,
      data: item
    });
  };

  useEffect(() => {
    ReportsCall({_page: 1,_limit: 10})
      .then(({ data }: any) => setReports([...reports, ...data]));
  }, []);

  console.log('modal: ', modalState);

  return (
    <>
      <Title color="gray2">گردش حساب</Title>
      <Modal {...modalState} handleClose={() => setModalState({...modalState, open: false, data: initialSelectedReport})} />
      {
        reports?.map(( report, index ) => (
          <ReportItem key={index} {...report}
            handleClick={handleClickReport} 
             />
        ))
      }
    </>
  );
};