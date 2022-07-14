import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import IsEmpty from '../../utils/IsEmpty';
import { AppDispatch } from '../..';
import { useDispatch } from 'react-redux';
import { likeNewPost, unlikeNewPost } from '../../actions/Post';

type InputProps = {
  post: any
}

const LikeButton: FunctionComponent<InputProps> = ({ post }) => {

  interface rootState {
    user: any
  }

  const [liked, setLiked] = useState<boolean>(false);
  const user = useSelector((state: rootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const likeHandler = () => {
    dispatch(likeNewPost(post.id, user.id));
    setLiked(true);
  };

  const unlikeHandler = () => {
    dispatch(unlikeNewPost(post.id, user.id));
    setLiked(false);
  }

  useEffect(() => {
    if(post.likers.some((item: any) => item.id === user.id || item === user.id )){
      setLiked(true)
    } else {
      setLiked(false)
    }
  },[user, post.likers, liked])


  return (
    <div>
      <div className="card-right__card-footer__like-container">


        {!IsEmpty(user) && liked === false &&(
          <FaRegHeart onClick={likeHandler} />
        )}

        {!IsEmpty(user) && liked && (
          <FaHeart onClick={unlikeHandler} />
        )}
        <span>{post.likers.length}</span>
      </div>
    </div>
  )
}

export default LikeButton