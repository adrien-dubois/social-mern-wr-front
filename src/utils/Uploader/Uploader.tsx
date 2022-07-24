import React, { useState } from 'react';
import * as S from './Uploader.elements';
import { BsUpload } from 'react-icons/bs';
import { FunctionComponent } from 'react';

type InputProps = {
    passData: (data: any) => void
}

const Uploader: FunctionComponent<InputProps> = ({ passData }) => {

    const [, setFile] = useState<string>("");
    const[imgPreview, setImgPreview] = useState<any>("");
    const[base64, setBase64] = useState<string>("");
    const[, setName] = useState<string>("");
    const[, setSize] = useState<string>("");
    const [validate, setValidate] = useState<boolean>(false);

    const onChange = (e: any) => {
        let file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    }

    const _handleReaderLoaded= (readerEvt: any) => {
        let binaryString = readerEvt.target.result;
        const base = btoa(binaryString);
        setBase64("data:image/png;base64," + base)
    }
    
    const onFileSubmit = () => {
        passData(base64);
        setValidate(true);
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
        setValidate(false)
    }

  return (
    <S.Div>
        <h3>Choisir un avatar</h3>

        <form  
            onChange={(e) => onChange(e)}
        >
            <div className="card">
                <S.ImgPreview
                    top={imgPreview === "" ? -185 : -10}
                    width={imgPreview === "" ? 120 : 145}
                    height={imgPreview === "" ? 120 : 145}
                >
                    {imgPreview !== "" &&
                        <img src={imgPreview} alt="Preview" />}
                </S.ImgPreview>

                {imgPreview !== "" &&
                <>
                    <div className="contain">

                        <div className='btn-container'>
                            <button 
                                    type='button' 
                                    className='btn-container__valid' 
                                    onClick={onFileSubmit}
                                    disabled={validate}
                                >
                                    Valider
                            </button>
                            <button 
                                type="button" 
                                className='btn-container__remove'  
                                onClick={remove}
                            >
                                Enlever
                            </button>
                        </div>
                    </div>
                </>
                }
                {imgPreview === "" &&
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
                }
            </div>
        </form>
    </S.Div>
  )
}

export default React.memo(Uploader)