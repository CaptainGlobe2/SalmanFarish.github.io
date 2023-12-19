const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmoreBtn = document.getElementById("show-more-btn");
const acc = '9oQeaZIH03Rx6vTj7xLaMuoHVvzWOyI1kiCHhZDpwo4'

let keyword = '';
let page = 1;
 async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acc}&per_page=12`;
                 

    const respose = await fetch(url);
    const data = await respose.json();

    if(page === 1){
        searchResult.innerHTML = ""
    }

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src  = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showmoreBtn.style.display="block"
 }
 

 searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
 })

 showmoreBtn.addEventListener("click",()=>{
    page++;
    searchImage()
 })