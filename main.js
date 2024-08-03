var img = document.getElementById("img")

img.addEventListener("click",()=>{
    document.querySelector("body").innerHTML = 
    `
    <main>
      <h1>Glint</h1>
      <a href=''>about</a>
      <a href=''>contact</a>
      <a href=''>more projects</a>
      <a href=''>email</a>
      <a href=''>blog</a>
      <a href=''>services</a>
    </main>
    `
})