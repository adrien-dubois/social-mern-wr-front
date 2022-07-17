import { FunctionComponent, useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Background, CloseModalButton, ModalContent, ModalWrapper } from './Modal.elements'
import defaultPic from '../../utils/img/user.png';
import FollowHandler from '../FollowHandler/FollowHandler';

type ModalProps = {
    showModal: boolean,
    setShowModal: any
}

const ModalFoer: FunctionComponent<ModalProps> = ({showModal, setShowModal}) => {
    const modalRef = useRef<any>();

    /*----- STORE ----*/
    const userData = useSelector((state: any) => state.user);
    const followData = useSelector((state: any) => state.follows);

    const closeModal = (e: any) => {
      if(modalRef.current === e.target) {
        setShowModal(false);
      }
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
          <div>
            <ModalWrapper showModal={showModal}>
            <ModalContent>
                    <h2>Abonnés</h2>
                    <ul>
                        {followData.map((user: any) => {
                            const avatar = user.picture;
                            for(let i = 0; i < userData.follower.length; i++) {
                                if(user.id === userData.follower[i].id) {
                                    return (
                                        <li key={user.id}>

                                        { avatar ? 
                                            <img src={avatar} alt='user-pic' />
                                            :
                                            <img src={defaultPic} alt='user-pic' />
                                        }

                                            <div className="modal-infos">
                                                <h4>{user.pseudo} </h4>
                                                <FollowHandler idToFollow={user.id} type="suggest" />
                                            </div>
                                        </li>
                                    );
                                }
                            }
                            return null;
                        })}
                    </ul>
                </ModalContent>
              <CloseModalButton 
                  aria-label='Close modal' 
                  onClick={() => setShowModal((prev: any) => !prev)} 
              />
            </ModalWrapper>
          </div>
        </Background>
      ): null}
    </>
  )
}

export default ModalFoer