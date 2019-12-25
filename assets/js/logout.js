const invalidToken = () => {
    window.location = './signin.html';
  };
  
  const { token } = localStorage;
  if (!token) {
    invalidToken();
  }
  const logout = () => {
      localStorage.removeItem('Token');
      window.location = './index.html';
    };
  
    document.querySelector('.logout').addEventListener('click', logout);
    // LOGOUT METHOD ENDS HERE