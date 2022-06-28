import { FunctionComponent, useCallback, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { Background, CloseModalButton, ModalContent, ModalWrapper } from './Modal.elements'

type ModalProps = {
    showModal: boolean,
    setShowModal: any
}

const ModalFoing : FunctionComponent<ModalProps> = ({showModal, setShowModal}) => {

    const modalRef = useRef<any>();

    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = (e: any) => {
      if(modalRef.current === e.target) setShowModal(false);
    }

    const keyPress = useCallback((e: any) => {
      if(e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    }, [setShowModal, showModal])

    useEffect(() => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

  return (
    <>
      { showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>

                <ModalContent>
                    <h2>Abonnements</h2>
                    <ul>
                    </ul>
                <p>Following</p>
                </ModalContent>

            <CloseModalButton 
                aria-label='Close modal' 
                onClick={() => setShowModal((prev: any) => !prev)} 
            />
            </ModalWrapper>
          </animated.div>
        </Background>
      ): null}
    </>
  )
}


export default ModalFoing