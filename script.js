let images = [
    "https://cdn.pixabay.com/photo/2024/08/03/16/43/ai-generated-8942577_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/08/03/16/36/ai-generated-8942562_640.jpg",
    "https://cdn.pixabay.com/photo/2024/08/04/07/28/blue-vervain-8943733_640.jpg",
    "https://cdn.pixabay.com/photo/2024/08/04/04/33/ai-generated-8943526_640.jpg",
  ];

  let x;
  function start() {
    var i = 0;
    let slideimg = document.createElement("img");
    x = setInterval(() => {
      if (i == images.length) { i = 0 };
      document.querySelector("#mainimg").src = images[i++];;
    }, 1000);
  }

  function stop() {
    clearInterval(x);
  };