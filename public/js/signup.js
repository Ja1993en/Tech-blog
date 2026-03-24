
  const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#username-signup').value.trim();
    const passcode = document.querySelector('#password-signup').value.trim();
    
    if(username && passcode){
      const response = await fetch('api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, passcode }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
   

    }
   
  }

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);