import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../..';
import IsEmpty from '../../utils/IsEmpty';
import { Div } from './Thread.elements';
import { Loader } from '@mantine/core';
import { getPosts } from '../../actions/Post';

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
    }, [loadPost]);

  return (
    <Div>
      <ul>
        {!IsEmpty(posts[0]) ? 
            posts.map((post: any) => {
              return (
                <li>{post.id} </li>
              )
            })  
            : 
          <Loader color="orange" size="sm" />
        }
      </ul>
    </Div>
  )
}

export default Thread