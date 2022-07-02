import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IsEmpty from '../../utils/IsEmpty';
import { FollowBtn } from './FollowHandler.elements'

type InputProps = {
  idToFollow: number;
}

const FollowHandler : FunctionComponent<InputProps> = ({ idToFollow }) => {

  interface rootState {
    user: any
  }

  const userData = useSelector((state: rootState) => state.user);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  const handleFollow = () => {

  }

  const handleUnfollow = () => {

  }

  useEffect(() => {
    if(!IsEmpty(userData.following)) {
      if(userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false)
    }
  },[userData, idToFollow])

  return (
    <>
      {isFollowed && (
        <FollowBtn>
            Abonné
        </FollowBtn>
      )}
      {isFollowed === false && (
        <FollowBtn>
            Suivre
        </FollowBtn>
      )}
    </>
  )
}

export default FollowHandler