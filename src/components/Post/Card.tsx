import { Loader } from '@mantine/core';
import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IsEmpty from '../../utils/IsEmpty';
import { Li } from './Card.elements';
import defaultPic from '../../utils/img/user.png';
import { DateParser } from '../../utils/DateParser';
import FollowHandler from '../FollowHandler/FollowHandler';
import { BiCommentDetail, BiShareAlt } from 'react-icons/bi';
import LikeButton from './LikeButton';
import { FaEdit } from 'react-icons/fa';
import { AppDispatch } from '../..';
import { updateOnePost } from '../../actions/Post';
import { useDispatch } from 'react-redux';
import DeleteCard from './DeleteCard';
import CardComment from './CardComment';


type CardProps = {
    post: any;
}


const Card: FunctionComponent<CardProps> = ({ post }) => {

    interface rootState {
        follows: any,
        user: any
    }

    const dispatch: AppDispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isUpdated, setIsUpdated] = useState<boolean>(false);
    const [textUpdate, setTextUpdate] = useState<any>(null);
    const [showComments, setShowComments] = useState<boolean>(false);
    const followsData = useSelector((state: rootState) => state.follows);
    const userData = useSelector((state: rootState) => state.user);

    const updateItem = () => {
        if(textUpdate) {
            dispatch(updateOnePost(post.id, textUpdate));
        }
        setIsUpdated(false);
    }

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
                    {isUpdated === false && <p>{post.message}</p> }
                    {isUpdated && (
                        <div className="card-right__update-post">
                            <textarea
                                defaultValue={post.message}
                                onChange={(e) => setTextUpdate(e.target.value)}
                            />
                            <div className="card-right__update-post__btn-container">
                                <button 
                                    className="card-right__update-post__btn-container__btn"
                                    onClick={updateItem}
                                >
                                    Valider modification
                                </button>
                            </div>
                        </div>
                    )}

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

                    {/* USER FUNCTIONS */}
                    {userData.id === post.author.id && 
                        <div className="card-right__button-container">
                            <div onClick={ ()=> setIsUpdated(!isUpdated) } >
                                <FaEdit/>
                            </div>
                            <DeleteCard postId={post.id}/>
                        </div>
                    }
                    
                    <div className="card-right__card-footer">
                        
                        {/* COMMENTS */}
                        <div className="card-right__card-footer__comment-icon">
                            <BiCommentDetail 
                                onClick={() => setShowComments(!showComments)} 
                            />
                            <span>{post.comments.length}</span>
                        </div>

                        {/* LIKE */}
                        <LikeButton post={post}/>
                        
                        {/* SHARE */}
                        <BiShareAlt/>
                    </div>

                    { showComments && <CardComment post={post}/> }

                </div>
            </>
        )}
    </Li>
  )
}

export default Card