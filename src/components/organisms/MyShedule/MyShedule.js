import React,{useState} from 'react'
import {useReactToPrint} from 'react-to-print';
import { useShedule } from '/src/global/state/useShedule'
import SheduleList from '/src/components/organisms/SheduleList/SheduleList'
import ButtonAction from '../../atoms/buttons/ButtonAction/ButtonAction';
import { useMedia } from '/src/global/hooks/useMedia';
import ButtonList from '/src/components/atoms/buttons/ButtonList/ButtonList';
import Modal from '/src/components/molecules/Modal/Modal';
import {StyledWrapper,StyledWrapperAction}from './Styles'

const MyShedule = () => {
    const {sheduleState, sheduleDispatch} = useShedule()
    const isSheduleHidden = useMedia('(min-width: 1500px)')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const printRef = React.useRef()

    const handlePrint = useReactToPrint({
      content: () => printRef.current,
    });

    if(false){
        return(
            <StyledWrapper>
                <StyledWrapperAction>
                    <h2>My shedule</h2>
                        <div>
                            <ButtonAction text={"PRINT"} onClick={handlePrint}/>
                            <ButtonAction text={"PDF"} onClick={handlePrint}/>
                        </div>
                </StyledWrapperAction>
                {sheduleState?.length === 0 ? <p>Dodaj zawartość do twojej listy. Elementy zapisuję się w pamięci twojej przeglądarki więc po odświeżeniu strony będziesz ją dalej posiadał na tym urządzeniu </p>:<SheduleList isMyShedule={true} ref={printRef} list={sheduleState}/>}
            </StyledWrapper>
        )
    }else{
        return(
            <>
                <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                    <StyledWrapperAction>
                        <h2>My shedule</h2>
                        <div>
                            <ButtonAction text={"PRINT"} onClick={handlePrint}/>
                            <ButtonAction text={"PDF"} onClick={handlePrint}/>
                        </div>
                    </StyledWrapperAction>
                    {sheduleState?.length === 0 ? <p>Dodaj zawartość do twojej listy. Elementy zapisuję się w pamięci twojej przeglądarki więc po odświeżeniu strony będziesz ją dalej posiadał na tym urządzeniu </p>:<SheduleList isMyShedule={true} ref={printRef} list={sheduleState}/>}
                </Modal>
                {/* <ButtonList isActive={isOpenModal} onClick={()=> setIsOpenModal(true)} amount={sheduleState.length}/> */}
            </>
        )
    }
}
  
export default MyShedule