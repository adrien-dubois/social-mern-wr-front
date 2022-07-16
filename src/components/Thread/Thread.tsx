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

  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: rootState) => state.posts);
  const [loadPost, setLoadPost] = useState<boolean>(true);
  const [count, setCount] = useState<any>(5);
  

  function handleUserScroll() {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement?.scrollHeight!) {
      console.log('YEEES')
      setLoadPost(true);
    }

  }
  
  useEffect(() => {
    if(loadPost){
      dispatch(getPosts(count));
      setLoadPost(false);
      setCount(count + 5);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadPost, count]);

    useEffect(() => {
      window.addEventListener("scroll", handleUserScroll);
      return () => window.removeEventListener("scroll", handleUserScroll);
    }, []);
  

  return (
    <Div id='scrollArea'>
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