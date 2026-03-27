


const loginFormHandler = async (event) => {
    event.preventDefault();
 
    const username = document.querySelector('#username').value.trim();
    const passcode = document.querySelector('#password').value.trim();

    if (username && passcode) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, passcode }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log(response);
      if (response.ok) {
        console.log("It worked")
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    }
  };



  document
  .querySelector('.submit-form').addEventListener('submit', loginFormHandler);



