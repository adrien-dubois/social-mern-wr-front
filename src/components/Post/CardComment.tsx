import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import IsEmpty from "../../utils/IsEmpty";
import { CommentContainer } from "./CardComment.elements";
import defaultPic from '../../utils/img/user.png';
import FollowHandler from "../FollowHandler/FollowHandler";
import { DateParser } from "../../utils/DateParser";
import { addComment, getAllPosts } from '../../actions/Post';
import { useAppDispatch } from '../../index';

type InputProps = {
    post: any
}

const CardComment: FunctionComponent<InputProps> = ({ post }) => {

    interface rootState {
        follows: any,
        user: any
    }

    const dispatch: any = useAppDispatch();
    const followsData = useSelector((state: rootState) => state.follows);
    const userData = useSelector((state: rootState) => state.user);
    const [text, setText] = useState("");

    const handleComment = (e: any) => {
        e.preventDefault();
        if(text) {
            dispatch(addComment(formData(), post.id))
            .then(() => dispatch(getAllPosts()))
            .then(() => setText(""));
        }
    }

    const formData = () => {
        return JSON.stringify({
            "text": text,
            "post": post.id
        })
    }

    return (
    <CommentContainer>
        {post.comments.map((comment: any) => {
            return(
                <>
                    {/* CONDITION IF AUTHOR */}
                    <div 
                        className={ comment.commenter.id === userData.id ? "comment-container client" : "comment-container"} 
                        key={comment.id} 
                    >
                        {/* PICTURE USER */}
                        {!IsEmpty(followsData[0]) && 
                            followsData.map((user: any) => {
                                const avatar = user.picture;
                                if(user.id === comment.commenter.id) {
                                    return (
                                            <img src={avatar ? avatar : defaultPic} alt='commenter-pic' /> 
                                        )
                                }
                                return null;
                            })      
                        }

                    
                        {/* PSEUDO */}
                        <div className="comment-container__comment-header">
                            <div className="comment-container__comment-header__pseudo">
                                <h3>
                                    {comment.commenter.pseudo}
                                </h3>

                                {/* FOLLOW ICON */}
                                {comment.commenter.id !== userData.id &&
                                    <FollowHandler 
                                        idToFollow={comment.commenter.id} 
                                        type={'cards'}/>
                                }
                            </div>
                            <span>{DateParser(comment.createdAt)}</span>
                        </div>
                        <div></div>
                        <p>{comment.text}</p>
                    </div>
                </>
            )
        })}
        {userData.id && (
            <form onSubmit={handleComment} className="comment-form" >
                <input 
                    type="text" 
                    name="text" 
                    onChange={(e) => setText(e.target.value)} 
                    value={text}
                    placeholder="Commentez..."
                    autoComplete="off"
                />
                <br/>
                <input type="submit" value="Envoyer"/>
            </form>
        )}
    </CommentContainer>
  )
}

export default CardComment