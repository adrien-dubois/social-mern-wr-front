import { Avatar } from '@mantine/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import * as S from '../Upload64/Upload64.elements';
import { BsUpload } from 'react-icons/bs';

const Upload64 = () => {

    /*----- USER HOOK -----*/
    const userData = useSelector((state: any) => state.user);
    const userAvatar = userData.picture;

    /*----- PREPARE UPLOAD -----*/
    const [file, setFile] = useState<string>();
    const[imgPreview, setImgPreview] = useState<any>("");
    const[base64, setBase64] = useState<string>();
    const[name, setName] = useState<string>();
    const[size, setSize] = useState<string>();
    const[isLoading, setIsLoading] = useState<boolean>(false);

    const onChange = (e: any) => {
        console.log("file", e.target.files[0]);
        let file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    }

    const _handleReaderLoaded = (readerEvt: any) => {
        let binaryString = readerEvt.target.result;
        setBase64(btoa(binaryString));
    }

    const onFileSubmit = ( e: any ) => {
        setIsLoading(true);
        e.preventDefault();
        console.log("bine", base64)
        let payload = { image: base64 }
        console.log("payload", payload)

        setTimeout(() => {
            setIsLoading(false)
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

  return (
            <S.Div>
                <h3>Avatar</h3>

                <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>

                    <S.ImgPreview top={imgPreview === "" ? 65 : -15}
                                  width={imgPreview === "" ? 120 : 145}
                                  height={imgPreview === "" ? 120 : 145}>

                         {imgPreview !== ""  ? 
                            <img src={imgPreview}/> : 
                                (userAvatar ?

                                <img src={userAvatar} style={{ height: '140px', width: '140px' }} /> 
                                :
                                <BsUpload />)
                            }
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
                    </S.ImgPreview>

                </form>
            </S.Div>
  )
}

export default Upload64