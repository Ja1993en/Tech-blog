


const loginFormHandler = async (event) => {
    event.preventDefault();
 
    const username = document.querySelector('#username').value.trim();
    const passcode = document.querySelector('#password-login').value.trim();
 
    if (username && passcode) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, passcode }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log(response);
      if (response.ok) {
        console.log("It worked")
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };



  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);



