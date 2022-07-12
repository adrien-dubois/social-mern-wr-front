import { Loader } from '@mantine/core';
import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IsEmpty from '../../utils/IsEmpty';
import { Li } from './Card.elements';
import defaultPic from '../../utils/img/user.png';
import { DateParser } from '../../utils/DateParser';
import FollowHandler from '../FollowHandler/FollowHandler';
import { BiCommentDetail, BiShareAlt } from 'react-icons/bi';

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
                    {/* AVATAR */}
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
                            
                            {/* PSEUDO */}
                            <h3>
                                {!IsEmpty(followsData[0]) &&
                                    followsData.map((user: any) => {
                                        if(user.id === post.author.id) return user.pseudo;
                                        return null
                                })}
                            </h3>

                            {/* FOLLOWER */}
                            {post.author.id !== userData.id &&
                                <FollowHandler idToFollow={post.author.id} type='cards'/>
                            }
                        </div>

                        {/* DATE */}
                        <span>{DateParser(post.createdAt)} </span>
                    </div>

                    {/* MESSAGE */}
                    <p>{post.message}</p>

                    {/* MESSAGE PIC */}
                    {post.picture && <img src={post.picture} alt="thread pic" className='card-right__card-pic' />}

                    {/* VIDEO IFRAME */}
                    {post.video && (
                        <iframe
                            width="500"
                            height="300"
                            src={post.video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={post.id}
                        ></iframe>
                    )}
                    
                    <div className="card-right__card-footer">
                        
                        {/* COMMENTS */}
                        <div className="card-right__card-footer__comment-icon">
                            <BiCommentDetail/>
                            <span>{post.comments.length}</span>
                        </div>

                        {/* LIKE */}
                        <h6>Like button</h6>
                        
                        {/* SHARE */}
                        <BiShareAlt/>
                    </div>
                </div>
            </>
        )}
    </Li>
  )
}

export default Card