// javascript for index.html

const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  // sort with _sort=likes _order=desc queries

  let url = "http://localhost:3000/posts?_sort=likes&_order=desc";

  if (term) {
    url += `&q=${term}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  displayData(data);
};

const displayData = (data) => {
  for (const items of data) {
    const container = document.createElement("section");
    container.classList.add("post");
    const title = document.createElement("h2");
    title.textContent = items.title;
    const like = document.createElement("p");
    like.textContent = `${items.likes} likes`;
    const article = document.createElement("p");
    article.textContent = items.body.slice(0, 190);
    const details = document.createElement("a");
    details.href = `./details.html?id=${items.id}`;
    details.textContent = "Read more ...";
    container.append(title, like, article, details);

    document.querySelector(".blogs").appendChild(container);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const posts = document.querySelector(".blogs").children;
  for (const item of posts) {
    item.remove();
  }
  renderPosts(searchForm.term.value.trim());
});

renderPosts();
