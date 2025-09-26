import { useNavigate } from 'react-router';

const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = ()=> {
    navigate(-1);
  }
  return goBack;
}

export default useGoBack