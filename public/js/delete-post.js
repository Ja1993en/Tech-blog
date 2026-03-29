
  const deletePostHandler = async (event) => {
    event.preventDefault(); 
    var pathArray = window.location.pathname.split('/');
    var id = pathArray[3]
   console.log(id)
      
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
       
    });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete');
      }
   
 
    
   
  }

  document
  .querySelector('#delete')
  .addEventListener('click', deletePostHandler);