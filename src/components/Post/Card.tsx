import { Loader } from '@mantine/core';
import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import IsEmpty from '../../utils/IsEmpty';
import { Li } from './Card.elements';

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
            <h2>test</h2>
        )}
    </Li>
  )
}

export default Card