document.addEventListener("DOMContentLoaded", function () {
    var gridContainer = document.getElementById("grid-container");
    var gridItems = gridContainer.getElementsByTagName("li");
    var itemCount = gridItems.length;

    // Check if the number of items is odd (3, 5, 7, etc.)
    if (itemCount % 2 !== 0) {
      // Add class to span 2 columns for the first child
      gridItems[0].classList.add("span-two-columns");
    } else {
      // Add class to set 2 columns for the entire grid container
      gridContainer.classList.add("to-kolonner");
    }
  });
 
 

  
 // Funksjon for å oppdatere visningen av nettleserbredden
 function updateBrowserWidth() {
    // Hent bredden på nettleservinduet
    var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Oppdater tekstinnholdet i elementet med ID "browser-width"
    document.getElementById('browser-width').textContent = 'Browser width: ' + browserWidth + 'px';
}

// Kjør funksjonen når siden lastes inn
window.addEventListener('load', updateBrowserWidth);

// Lytt etter endringer i nettleservinduet og oppdater visningen
window.addEventListener('resize', updateBrowserWidth);
