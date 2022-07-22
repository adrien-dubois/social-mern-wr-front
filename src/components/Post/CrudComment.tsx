import { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch } from '../..'
import { Div } from './CrudComment.elements'
import { TbEdit, TbEditOff } from 'react-icons/tb'
import { editComment } from '../../actions/Post';

type InputProps = {
    comment: any,
    postId: number
}

const CrudComment: FunctionComponent<InputProps> = ({ comment, postId }) => {

    interface rootState {
        user: any
    }

    const [isAuthor, setIsAuthor] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [text, setText] = useState("");
    const user = useSelector((state: rootState) => state.user);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        const checkAuthor = () => {
            if (user.id === comment.commenter.id){
                setIsAuthor(true);
            }
        }
        checkAuthor();
    }, [user, comment.commenter.id])

    const handleEdit = (e: any) => {
        e.preventDefault();
        
        const formData = () => {
            return JSON.stringify ({
                "text": text
            });
        };

        if(text) {
            dispatch(editComment(formData(), comment.id, postId, text));
            setText("");
            setEdit(false);
        }
    }

  return (
    <Div>
        <div className="edit-comment">
            {isAuthor && edit === false && (
                <span className='tooltip' onClick={() => setEdit(!edit)}>
                    <TbEdit/> 
                    <span className="tooltiptext">Éditer le com.</span>
                </span>
            )}
            {isAuthor && edit && (
                <form 
                    onSubmit={handleEdit}
                    className="edit-comment__form" 
                >
                    <label htmlFor="text" onClick={()=> setEdit(!edit)} >
                        <TbEditOff/>
                    </label>
                    <br/>
                    <input 
                        type="text" 
                        name="text" 
                        onChange={(e) => setText(e.target.value)} 
                        defaultValue={comment.text}  
                    />
                    <br/>

                    <div className="btn">
                        <span>

                        </span>
                        <input type="submit" value="Valider" />
                    </div>

                </form>
            )}
        </div>
    </Div>
  )
}

export default CrudComment