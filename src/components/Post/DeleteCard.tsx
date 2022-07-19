import React, { FunctionComponent } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

type InputProps = {
    postId: any
}

const DeleteCard : FunctionComponent<InputProps> = ({ postId }) => {
  return (
    <div>
        <FaRegTrashAlt/>
    </div>
  )
}

export default DeleteCard