import { useSelector } from 'react-redux'

const ErrorNotification = () => {

  interface RootState {
    errors: any
  }

    const message = useSelector((state: RootState) => state.errors.message);
    const isError = useSelector((state: RootState) => state.errors.isError );
    const isPass = useSelector((state: RootState) => state.errors.isPass );

  return (
    <>
        {isError && (
            <div className="error-auth">
                <span>{message} </span>
            </div>
        )}
        {isPass && (
            <div className="error-auth">
                <span>{message} </span>
            </div>
        )}
    </>
  )
}

export default ErrorNotification;