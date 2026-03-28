
  const editPostHandler = async (event) => {
    event.preventDefault(); 
    var pathArray = window.location.pathname.split('/');
    var id = pathArray[3];


console.log(id)
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#comment').value.trim();
 console.log(title + content)
    if(title && content){
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
   
 
    }
   
  }

  document
  .querySelector('.update-form')
  .addEventListener('submit', editPostHandler);