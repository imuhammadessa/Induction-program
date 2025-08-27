import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';

const useIdleLogout = (timeoutSeconds = 300) => {
  const navigate = useNavigate();

  const handleOnIdle = () => {
    alert('You have been logged out due to inactivity.');
    localStorage.removeItem('token');
    navigate('/login');
  };

  useIdleTimer({
    timeout: timeoutSeconds * 1000,
    onIdle: handleOnIdle,
    debounce: 500,
  });
};

export default useIdleLogout;
