import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../..';
import IsEmpty from '../../utils/IsEmpty';
import { Div } from './Thread.elements';
import { getPosts } from '../../actions/Post';
import Card from '../Post/Card';

const Thread = () => {

  interface rootState  {
    posts: any
  }

    const [loadPost, setLoadPost] = useState<boolean>(true);
    const dispatch: AppDispatch = useDispatch();
    const posts = useSelector((state: rootState) => state.posts);

    useEffect(() => {
      if(loadPost){
        dispatch(getPosts());
        setLoadPost(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadPost]);

  return (
    <Div>
      <ul>
        {!IsEmpty(posts[0]) && 
            posts.map((post: any) => {
              return <Card post={post} key={post.id} /> ;
            })}
      </ul>
    </Div>
  )
}

export default Thread