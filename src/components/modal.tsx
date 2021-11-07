import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { ModalStateType } from './content';
import Flex from './utils/Flex';
import TextComponent from './utils/Text';

const ModalWrapper = styled(Flex)(({ theme }) => ({
  opacity: 0,
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,
  zIndex: -1,
  transition: 'ease .3s',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    backgroundColor: theme.palette['black'],
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    opacity: '.5',
    position: 'absolute',
    zIndex: 0,
  },
  '& .modal': {
    backgroundColor: theme.palette['white'],
    borderRadius: theme.spacing(1),
    position: 'relative',
    width: 'calc(100% - 2rem)',
    zIndex: 6,
    minHeight: theme.spacing(9),
    boxSizing: 'border-box',
    padding: theme.spacing(2),
    transition: 'ease .3s',
    transform: 'translateY(200%)',
  },
  '&.show': {
    zIndex: 100,
    opacity: 1,
    '& .modal': {
      transform: 'translateY(0)',
    }
  },
}));

const FlexWrapper = styled(Flex)(({ theme }) => ({
  justifyContent: 'space-between',
  borderBottom: `solid 1px ${theme.palette['gray3']}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

type HandleClose = { handleClose: () => any };

export default function Modal({ handleClose, ...modalState }: HandleClose & ModalStateType){
  const { open, price, data } = modalState;
  const { date, tracking_code, reference_number } = data;
  const modalBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside({ target }: any) {
      if (modalBox.current && !modalBox.current.contains(target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <ModalWrapper className={open ? 'show' : ''}>
      <Flex className="modal" direction="column" ref={modalBox}>
        <div>
          <TextComponent as="h5" align="center">{price} ریال</TextComponent>
          <TextComponent color="gray2" align="center">مبلغ</TextComponent>
        </div>
        <FlexWrapper>
          <TextComponent color="gray2">زمان</TextComponent>
          <TextComponent>{date && new Date(date).toLocaleDateString('fa-IR')}</TextComponent>
        </FlexWrapper>
        <FlexWrapper>
          <TextComponent color="gray2">شماره پیگیری</TextComponent>
          <TextComponent>{tracking_code}</TextComponent>
        </FlexWrapper>
        <FlexWrapper>
          <TextComponent color="gray2">شماره مرجع</TextComponent>
          <TextComponent>{reference_number}</TextComponent>
        </FlexWrapper>
      </Flex>
    </ModalWrapper>
  );
}