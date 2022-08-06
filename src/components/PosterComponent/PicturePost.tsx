import { FunctionComponent, useEffect, useState } from 'react'
import { GoFileMedia } from 'react-icons/go';
import IsEmpty from '../../utils/IsEmpty';

type InputProps = {
    passData: (data: any) => void
}

const PicturePost: FunctionComponent<InputProps> = ({ passData }) => {

    const[base64, setBase64] = useState<string>("");

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
    
    useEffect(() => {
        if(!IsEmpty(base64)){
            passData(base64);
        }
    }, [base64])

  return (
    <>

        <GoFileMedia/>
        <input 
            type="file" 
            name='avatar' 
            id='file'
            accept='image/png,
                    image/jpg,
                    image/jpeg'
            onChange={(e) => onChange(e)}
        /> 
    
    </>
  )
}

export default PicturePost