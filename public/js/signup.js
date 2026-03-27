
  const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#username').value.trim();
    const passcode = document.querySelector('#password').value.trim();
    
    if(username && passcode){
      const response = await fetch('api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, passcode }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
   

    }
   
  }

  document
  .querySelector('.submit-form')
  .addEventListener('submit', signupFormHandler);