
  // const commentPostHandler = async (event) => {
  //   event.preventDefault(); 
  //   const pathArray = window.location.pathname.split('/');
  //   const post_id = pathArray[2];

  //   const comment = document.querySelector('#comment').value.trim();

  //   if(comment){
  //     const response = await fetch(`/api/comment/save`, {
  //       method: 'POST',
  //       body: JSON.stringify({comment, post_id }),
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //     if (response.ok) {
  //       window.location.reload();
  //           } else {
  //       alert('Failed to update post');
  //     }
 
 
  //   }
   
  // }

  // document
  // .querySelector('#comment-form')
  // .addEventListener('submit', commentPostHandler);