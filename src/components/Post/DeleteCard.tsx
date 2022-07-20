import { FunctionComponent } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../..'
import { delPost } from '../../actions/Post'

type InputProps = {
    postId: any
}

const DeleteCard : FunctionComponent<InputProps> = ({ postId }) => {

  const dispatch: AppDispatch = useDispatch();
  const deleteQuote = () => dispatch(delPost(postId));

  return (
    <div onClick={() => {
      if(window.confirm("Voulez-vous supprimer ce post?")){
        deleteQuote()
      }
    }}>
        <FaRegTrashAlt/>
    </div>
  )
}

export default DeleteCard