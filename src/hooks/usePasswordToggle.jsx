import { useState } from 'react';

const usePasswordToggle = () => {
  const [isPasswordVisible, setPasswordVisible] = useState({});

  const passwordToggle = (fieldName) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  return {
    isPasswordVisible,
    passwordToggle,
  };
};

export default usePasswordToggle;