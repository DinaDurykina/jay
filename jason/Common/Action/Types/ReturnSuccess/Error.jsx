import type from './type';
import Error from '../../Error';

// This is a common pattern to return a Error action with a $return.success type
// So this component helps saving time.
// This type does not accept children since its the bottom of the calling stack.
const ErrorTypeReturnSuccess = () => <Error type={type} />;

export default ErrorTypeReturnSuccess;
