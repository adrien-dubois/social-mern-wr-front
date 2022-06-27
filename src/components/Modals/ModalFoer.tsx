import { FunctionComponent } from 'react'
import { Div } from './ModalFoer.elements'

type ModalProps = {
    showModal: boolean,
    setShowModal: any
}

const ModalFoer: FunctionComponent<ModalProps> = ({showModal, setShowModal}) => {
  return (
    <Div>
        modal
    </Div>
  )
}

export default ModalFoer