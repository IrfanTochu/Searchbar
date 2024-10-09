function searchContent() {
  // Declare variables
  let input, filter, content, items, textValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  content = document.getElementsByClassName('content')[0];
  items = content.getElementsByClassName('text');

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < items.length; i++) {
      textValue = items[i].textContent || items[i].innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          items[i].style.display = "";
      } else {
          items[i].style.display = "none";
      }
  }

  // Searching in animals list
  let animalsList = document.getElementById('list');
  let animals = animalsList.getElementsByClassName('animals');

  for (let j = 0; j < animals.length; j++) {
      textValue = animals[j].textContent || animals[j].innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          animals[j].style.display = "";
      } else {
          animals[j].style.display = "none";
      }
  }
}
