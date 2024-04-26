async function getRepo() {
  const url = "https://api.github.com/users/ngphl/repos";

  let res = await fetch(url);

  let data = await res.json();

  console.log(data);
}
