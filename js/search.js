
function search() {
    var searchText = document.getElementById("searchInput").value;
    var images = document.querySelectorAll("a");
    
    if(searchText.length > 0){
      images.forEach((image) => {
        image.classList.add("hide");
        if(image.dataset.tags.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
          image.classList.remove("hide");
        }
      });
    }else{
      images.forEach((image) => {
          image.classList.remove("hide");
      });
    }
  }