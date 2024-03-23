 //membarikan link google drive alamat lewat id src=  
 var jsonData = {
    video_1:
      "https://drive.google.com/file/d/1gILTAeQTthF3geDBs7sS44lYahwas9xP/preview",
    gambar_2:
      "https://drive.google.com/thumbnail?id=1__gZlUvX5aZZ8jlJrR1oUU_SI1Sl8_TK",
    gambar_1:
      "https://drive.google.com/thumbnail?id=1ONelWwkrRq1DaviPnUb0-Idlbm9RwKep",
  };

  // Loop untuk semua iframe dengan id yang dimulai dengan "video_"
  for (var key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      var linkKey = document.getElementById(key);
      if (linkKey) {
        linkKey.src = jsonData[key];
      }
    }
  }