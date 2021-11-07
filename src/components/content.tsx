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
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const limitedPage = 5;

  const handleClickReport = (item: ReportItemType) => {
    setModalState({
      ...modalState,
      open: true,
      data: item
    });
  };


  const callReports = () => {
    ReportsCall({_page: page,_limit: 10})
      .then(({ data }: any) => {
        setLoading(false);
        setReports([...reports, ...data]);
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', function(){
      if((window.innerHeight + window.scrollY) >= this.document.body.offsetHeight){
        if(page < limitedPage){
          setPage(prev => prev + 1);
          setLoading(true);
        }
      }
    });
    return () => {
      if(page > limitedPage){
        window.removeEventListener('scroll', () => console.log('removed'));
      }
    }
  }, []);

  useEffect(() => {
    if(page <= limitedPage){
      callReports();
    }
    else{
      setLoading(false);
    }
  }, [page]);

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
      { loading && <TextComponent align="center" color="navyBlue">Loading ...</TextComponent> }
    </>
  );
};