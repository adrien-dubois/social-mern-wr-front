import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppDispatch, useAppDispatch } from '../..';
import IsEmpty from '../../utils/IsEmpty';
import { FollowBtn } from './FollowHandler.elements'
import { followUser, unfollowUser } from '../../actions/Follow';
import { Loader } from '@mantine/core';
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';

const Types = {
  Suggest: "suggest",
  Cards: 'cards'
};

type Types = typeof Types[keyof typeof Types];

type InputProps = {
  idToFollow: any;
  type: Types;
}

const FollowHandler : FunctionComponent<InputProps> = ({ idToFollow, type }) => {

  interface rootState {
    user: any
  };

  /*----- HOOKS STATES -----*/
  const userData = useSelector((state: rootState) => state.user);
  const dispatch: AppDispatch = useAppDispatch();
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /*----- HANDLERS -----*/
  const handleFollow = () => {
    setIsLoading(true)
    dispatch(followUser(idToFollow))
    setTimeout(() => {
      setIsLoading(false)
      setIsFollowed(true);
    },2000)
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(idToFollow))
    setIsFollowed(false);
  };

  /*----- Check if array of following users contains the Id To Follow to set the follow button on the right text value follow or followed -----*/
  useEffect(() => {

    if(!IsEmpty(userData.following)) {

      if(userData.following.filter(function (el: any) {return el.id === idToFollow}).length > 0) {
        setIsFollowed(true);

      } else setIsFollowed(false);
    }
  },[userData, idToFollow])

  return (
    <>
      {isFollowed && !IsEmpty(userData) && 
        <span onClick={handleUnfollow} >
        {(type as Types) === Types.Suggest && 

          <FollowBtn>
              {isLoading ? 
                <Loader color="orange" size="sm"/>
                :
                <>
                  Abonné  
                </>
            }
          </FollowBtn> }
        


          {(type as Types === Types.Cards && <BsCheckCircleFill/>)}
        </span>
      }
      {isFollowed === false && !IsEmpty(userData) && 
      <span onClick={handleFollow}>
        {(type as Types) === Types.Suggest && <FollowBtn>
            Suivre
        </FollowBtn>}

        {(type as Types) === Types.Cards && <BsCheckCircle/>}
      </span>
      }
    </>
  )
}

export default FollowHandler