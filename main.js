import { posts } from './posts.js';

const container = document.getElementById("postsContainer");

container.innerHTML = posts.map((post, index) => {
  const bgColor = index % 2 === 0 ? '#0c233f' : '#fff';
  const textColor = index % 2 === 0 ? '#fff' : '#000'; 

  return `
    <div class="post" style="background-color: ${bgColor}; color: ${textColor};display:flex; flex-direction:row; padding: 15px;">
    <div>  
    <h2 style="font-family: inter;">${post.title} </h2>
      <p style="font-family: lato ;">${post.content.substring(0, 700)}... <a href="post.html?id=${post.id}" class="read-more" data-id="${post.id}" style="color: inherit;">Read More</a></p>
      </div>
    </div>
  `;
}).join('');
