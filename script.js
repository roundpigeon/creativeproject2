document.getElementById("generateCard").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://api.scryfall.com/cards/random";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let image = json.image_uris.normal;

    function getCorrectCardSize(size) {
      if (size.matches) {
        image = json.image_uris.small;
      }
    }

    let sizeQuery = window.matchMedia("(max-width: 769px)");
    getCorrectCardSize(sizeQuery);
    sizeQuery.addListener(getCorrectCardSize)

    document.getElementById("randomCard").innerHTML = '<img src="' + image + '">';
    });
});
