setInterval(() => {
const difference = new Date("2020-03-16") - new Date();
const parts = {
    D: Math.floor(difference / (1000 * 60 * 60 * 24)),
    H: Math.floor((difference / (1000 * 60 * 60)) % 24),
    M: Math.floor((difference / 1000 / 60) % 60),
    S: Math.floor((difference / 1000) % 60),
  };

  
  const remaining = Object.keys(parts)
  .map((part) => {
    if (!parts[part]) return;
    return `${parts[part]}${part}`;
  })
  .join(" ");

  document.getElementById("countdown").innerHTML = remaining;


    // This is where we'd recalculate the time remaining
  }, 1000);


// FAQ
  const items = document.querySelectorAll(".accordion a");

  function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
      
     

  
  