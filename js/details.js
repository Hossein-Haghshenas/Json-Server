// javascript for details.html

const id = new URLSearchParams(window.location.search).get("id");

const renderPosts = async () => {
  const url = "http://localhost:3000/posts/" + id;

  const res = await fetch(url);
  const data = await res.json();
  displayData(data);
};
renderPosts();

const displayData = (data) => {
  const container = document.createElement("section");
  container.classList.add("post");
  const title = document.createElement("h2");
  title.textContent = data.title;
  const like = document.createElement("p");
  like.textContent = `${data.likes} likes`;
  const article = document.createElement("p");
  article.textContent = data.body;
  container.append(title, like, article);

  document.querySelector(".details").appendChild(container);
};
