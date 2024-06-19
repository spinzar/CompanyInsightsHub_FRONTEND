import "./LoadingSpinner.css"
import { ClipLoader } from 'react-spinners';

type Props = {
  isLoading?: boolean;
}

const LoadingSpinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading-spinner">
        <ClipLoader
          color='#AAFF99'
          loading={isLoading}
          size={30}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    </>
  )
}

export default LoadingSpinner