import { FunctionComponent } from 'react'
import { Div } from './Input.elements'

type InputProps = {
  placeholder: string;
  name: string;
  error: any;
  icon: JSX.Element;
  type: string;
  handleChange: (e: any) => void;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    error?: any;
  }
}

const Input: FunctionComponent<InputProps> = ({ 
    handleChange,
    icon, 
    type, 
    placeholder,
    name,
    error
}) => {

  return (
    <Div className={error ? "error" : ""}>
        <div className="icon">
            {icon}
        </div>
        <input
            name={name}
            type={type}
            onChange={handleChange}
            required
            autoComplete='off'
            placeholder={placeholder}
        />
    </Div>
  )
}

export default Input