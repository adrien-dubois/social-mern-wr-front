import { useState } from 'react'
import { useSelector } from 'react-redux';
import * as S from '../Upload64/Upload64.elements';
import { BsTrash, BsUpload } from 'react-icons/bs';
import defaultPic from '../img/user.png'
import { ImSpinner2 } from 'react-icons/im';
import { Loader } from '@mantine/core';
import { useAppDispatch, AppDispatch } from '../../index';
import { editUserPic, removeUserPic } from '../../actions/User';

const Upload64 = () => {

    /*----- USER HOOK -----*/
    const userData = useSelector((state: any) => state.user);
    const userAvatar = userData.picture;
    const dispatch: AppDispatch = useAppDispatch();

    /*----- PREPARE UPLOAD -----*/
    const [file, setFile] = useState<string>();
    const[imgPreview, setImgPreview] = useState<any>("");
    const[base64, setBase64] = useState<string>();
    const[name, setName] = useState<string>();
    const[size, setSize] = useState<string>();
    const[isLoading, setIsLoading] = useState<boolean>(false);

    const onChange = (e: any) => {
        let file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    }

    const _handleReaderLoaded = (readerEvt: any) => {
        let binaryString = readerEvt.target.result;
        const base = btoa(binaryString);
        setBase64("data:image/png;base64," + base)
    }

    const onFileSubmit = ( e: any ) => {
        setIsLoading(true);
        e.preventDefault();
        let payload = { image: base64 }
        setTimeout(() => {
            dispatch(editUserPic(payload));
            setIsLoading(false);
            remove();
        }, 2000)
    }

    const picUpload = ( e: any ) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        if(reader !== undefined && file !== undefined) {
            reader.onloadend = () => {
                setFile(file)
                setSize(file.size)
                setName(file.name)
                setImgPreview(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    const remove = () => {
        setFile("")
        setSize("")
        setName("")
        setImgPreview("")
    }

    const handleRemove = (e: any) => {
        e.preventDefault();
        dispatch(removeUserPic());
    }

  return (
            <S.Div>
                <h3>Avatar</h3>

                <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
                    <div className="card">

                        <S.ImgPreview>
                            {imgPreview !== ""  ? 
                                    <img src={imgPreview} alt="Preview"/> : 
                                        (userAvatar ?

                                        <img src={userAvatar} alt="Already stored"/> 
                                        :
                                        <img src={defaultPic} alt="Never stored"/>)}
                        </S.ImgPreview>

                        <div className={imgPreview !== "" ? 'contain' : 'contain hidden' }>
                            <section>
                                <label>Nom de l'image</label>
                                <span>{ name }</span>


                                <label>Taille</label>
                                <span>{ size } {''} ko</span>
                            </section>
                            <div className='btn-container'>
                                <button type='submit' className='btn-container__valid' >
                                    {isLoading ?
                                    <Loader color="orange" size="sm" />  :
                                    <>
                                        Valider
                                    </>
                                }
                                </button>
                                <button type="button" className='btn-container__remove'  onClick={remove}>Enlever</button>
                            </div>
                        </div>
                        
                        {imgPreview === "" &&
                        <>
                        <div className="card__btns">
                            <S.BtnSvg>
                                <BsUpload />
                                <input 
                                    type="file" 
                                    name='avatar' 
                                    id='file'
                                    accept='image/png,
                                            image/jpg,
                                            image/jpeg'
                                    onChange={picUpload}
                                    src={imgPreview}
                                /> 
                            </S.BtnSvg>
                            <S.BtnDel onClick={handleRemove} >
                                <BsTrash/>
                            </S.BtnDel>
                        </div>
                        <br/>
                        <h3 className='upload_subtitle'>Veuillez sélectionner une nouvelle image si vous souhaitez en changer.</h3>
                        </>
                        }
                    </div>
                    
                </form>
            </S.Div>
  )
}

export default Upload64