// javascript for create.html
const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const article = {
    title: form.title.value,
    body: form.body.value,
    likes: Math.floor(Math.random() * 50),
  };

  await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(article),
    headers: { "Content-Type": "application/json" },
  });

  window.location.replace("./../index.html");
};

form.addEventListener("submit", createPost);
