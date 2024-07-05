document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('posts-list');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const backButton = document.getElementById('back-btn');
  
    // Get existing posts from localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Function to display posts on the posts page
    function displayPosts() {
      postsList.innerHTML = '';
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><em>By ${post.username}</em></p>
        `;
        postsList.appendChild(postElement);
      });
    }
  
    // Display posts when page loads
    displayPosts();
  
    // Toggle between light and dark mode
    toggleThemeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  
    // Navigate back to landing page
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
});
  