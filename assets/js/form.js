document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blog-form');
  
    blogForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = blogForm.username.value;
      const title = blogForm.title.value;
      const content = blogForm.content.value;
  
      if (username && title && content) {
        // Create blog post object
        const post = {
          username: username,
          title: title,
          content: content
        };
  
        // Get existing posts from localStorage or create empty array
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
  
        // Add new post to posts array
        posts.push(post);
  
        // Store updated posts array back to localStorage
        localStorage.setItem('posts', JSON.stringify(posts));
  
        // Redirect to posts page
        window.location.href = 'posts.html';
      } else {
        alert('Please complete all fields.');
      }
    });
});
  