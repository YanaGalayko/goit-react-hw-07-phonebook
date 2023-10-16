import { ProgressBar } from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
return (
    <LoaderStyled>
       <ProgressBar
      height="120"
      width="120"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor = '#00BFFF'
      barColor = '#FFFF00'/>
    </LoaderStyled>
)
}

export default Loader