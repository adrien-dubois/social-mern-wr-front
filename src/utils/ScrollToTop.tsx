import { useState } from 'react'
import styled from "styled-components"
import { FaChevronUp } from 'react-icons/fa'

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", ()=> {
        window.pageYOffset>100 ? setVisible(true) : setVisible(false);
    })

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <Div>
        <span className={`${visible ? "block" : "none"}`} onClick={() => ScrollUp()} >
            <FaChevronUp/>    
        </span>
    </Div>
  )
}

const Div = styled.div`
    max-width: 100vw;
    .none{
        opacity: 0;
        visibility: hidden;
    }
    span{
        position: fixed;
        cursor: pointer;
        bottom: 40px;
        right: 40px;
        background-color: var(--input-color);
        padding: 1rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in-out;
        z-index: 50;
        svg{
            color: var(--white-antique);
            font-size: 1.3rem;
        }
    }
`;

export default ScrollToTop