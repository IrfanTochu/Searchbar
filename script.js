function searchFunction() {
    let input = document.getElementById('cari').value;
    let resultsContainer = document.getElementById('searchResults');
    
  
    // You can implement your search logic here
    // For demonstration, let's just display the search query
    resultsContainer.innerHTML = '<p>Search query: ' + input + '</p>';
  }
  
// Sample data for demonstration
var data = [
    { id: 1, name: 'Mark L. Fernando' },
    { id: 2, name: 'Other Skills'},
    { id: 3, name: 'education'},
    { id: 4, name: 'Personal Skills'},
  ];
  
  function searchFunction() {
    var input = document.getElementById('searchInput').value.toLowerCase(); // Get search input and convert to lowercase
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    // Perform search
    var results = data.filter(function(item) {
      return item.name.toLowerCase().includes(input); // Change to any property you want to search in your data
    });
  
    // Display results
    if (results.length > 0) {
      results.forEach(function(item) {
        var resultElement = document.createElement('p');
        resultElement.textContent = 'Name: ' + item.name + ', Age: ' + item.age;
        resultsContainer.appendChild(resultElement);
      });
    } else {
      var noResultElement = document.createElement('p');
      noResultElement.textContent = 'No results found';
      resultsContainer.appendChild(noResultElement);
    }
  }
  