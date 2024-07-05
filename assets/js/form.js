document.addEventListener('DOMContentLoaded', function() {
  const blogForm = document.getElementById('blogForm');

  blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username && title && content) {
      const post = {
        username: username,
        title: title,
        content: content
      };

      // Save to localStorage
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));

      // Redirect to posts.html
      window.location.href = 'blog.html';
    } else {
      alert('Please complete all fields.');
    }
  });
});

  