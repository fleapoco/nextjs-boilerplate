import { useAppDispatch } from '@hooks/useRedux';
import { clearToken, errorHandler, getToken } from '@utils/index';
import React, { useEffect, useState } from 'react';
import { clearState, setUser } from '@store/reducers/user';
import Loader from '@components/common/Loader';

interface IProps {
  loading?: boolean;
  children: React.ReactNode;
  success: boolean;
  message: string;
  data: any;
}
const PageWrapper: React.FC<IProps> = ({ children, loading, success, message, data }) => {
  const dispatch = useAppDispatch();
  const [fallBack, setFallBack] = useState(loading ?? true);

  const validate = () => {
    const token = getToken();
    if (token && !success) {
      errorHandler({ showError: true, msg: message });
      clearToken();
      dispatch(clearState());
    } else if (token && success && data) dispatch(setUser(data));
    setFallBack(false);
  };

  useEffect(() => {
    validate();
  }, []);

  return <>{fallBack ? <Loader /> : children}</>;
};

export default PageWrapper;
