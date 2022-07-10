import { Loader } from '@mantine/core';
import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IsEmpty from '../../utils/IsEmpty';
import { Li } from './Card.elements';
import defaultPic from '../../utils/img/user.png';
import { DateParser } from '../../utils/DateParser';
import FollowHandler from '../FollowHandler/FollowHandler';

type CardProps = {
    post: any;
}

const Card: FunctionComponent<CardProps> = ({ post }) => {

    interface rootState {
        follows: any,
        user: any
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const followsData = useSelector((state: rootState) => state.follows);
    const userData = useSelector((state: rootState) => state.user);

    useEffect(() => {
        !IsEmpty(followsData[0]) && setIsLoading(false);
    },[followsData]);

  return (
    <Li key={post.id}>
        {isLoading ? (
            <Loader color="orange" size="sm" />
        ) : (
            <>
                <div className="card-left">
                    
                    {!IsEmpty(followsData[0]) && 
                        followsData.map((user: any) => {
                            const avatar = user.picture;
                            if(user.id === post.author.id) {
                                return (
                                        <img src={avatar ? avatar : defaultPic} alt='user-pic' /> 
                                    )
                            }
                            return null;
                        })    
                        
                    }
                </div>

                <div className="card-right">
                    <div className="card-right__header">
                        <div className="card-right__header__pseudo">
                            <h3>
                                {
                                    !IsEmpty(followsData[0]) &&
                                    followsData.map((user: any) => {
                                        if(user.id === post.author.id) return user.pseudo;
                                        return null
                                    })
                                }
                            </h3>
                            {post.author.id !== userData.id &&
                                <FollowHandler idToFollow={post.author.id} type='cards'/>
                            }
                        </div>
                        <span>{DateParser(post.createdAt)} </span>
                    </div>
                </div>
            </>
        )}
    </Li>
  )
}

export default Card