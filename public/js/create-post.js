
  const createPostHandler = async (event) => {
    event.preventDefault(); 
    

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#comment').value.trim();
 console.log(title + content)
    if(title && content){

      const response = await fetch(`/api/post/create-post`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type':'application/json' },
      })

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
   
 
    }
   
  }

  document
  .querySelector('.create-form')
  .addEventListener('submit', createPostHandler);