import styled from 'styled-components';

export const FollowBtn = styled.button`
    padding: 10px 24px;
    background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
    background-size: 200% auto;
    white-space: nowrap;
    color: var(--white-antique);
    font-weight: 600;
    margin-top: .5rem;
    border: none;
    text-transform: uppercase;
    border-radius: 24px;
    cursor: pointer;
    transition: all .4s ease-in;

    &:hover{
        background-position: right center;
        box-shadow: 0 0 10px var(--white-antique);
    }
`;