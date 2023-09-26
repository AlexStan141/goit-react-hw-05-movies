//const api_key = '8404239dbd7c51980a8e1af3b6c5f310';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDA0MjM5ZGJkN2M1MTk4MGE4ZTFhZjNiNmM1ZjMxMCIsInN1YiI6IjY0YmJmNTdhMGVkMmFiMDBhY2M0Y2E0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cPRkCrBuYukpMebNMRquVY5APYjg0xVXeyw3iXKdhYU',
  },
};

export async function getTrending(timeWindow) {
  var response = await fetch(
    `https://api.themoviedb.org/3/trending/all/${timeWindow}?language=en-US`,
    options
  );
  response = await response.json();
  console.log(response);
}
