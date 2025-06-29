import { posts } from './posts.js';

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get('id'));

const post = posts.find(p => p.id === postId);

const container = document.getElementById("postDetail");

if (post) {
  container.innerHTML = `
    <h1 style="display:flex;justify-content: center; margin-top:0;">${post.title}</h1>
    <p>${post.content}</p>
    <a href="publication.html" class="text-white">← Back to All Posts</a>
  `;
} else {
  container.innerHTML = `<p>Post not found.</p>`;
}
