
import sidebar from "../components/sidebar.js";

import storeSearchterm from "../scripts/search.js"

document.querySelector("#sidebar").innerHTML = sidebar();

let article = JSON.parse(localStorage.getItem("article"));
console.log("article :",article);
let main = document.querySelector("#main");
appendArticles(article,main);

function appendArticles(article,main)
{
    main.innerHTML = "";
    let title = document.createElement("p");
    title.setAttribute("class","title");
    title.innerHTML = `<b>Headline :</b> <u>${article.title}</u>`;

    let ImageBox = document.createElement("div");
    ImageBox.setAttribute("class","ImageBox");
    let ImageBox2 = document.createElement("div");
    ImageBox2.setAttribute("class","ImageBox2");
    let Image = document.createElement("img");
    Image.setAttribute("class","Image");
    Image.src = article.urlToImage;

    let Description = document.createElement("p");
    Description.setAttribute("class","Description");
    Description.innerHTML = `<b>Description :</b> ${article.description}`;

    let Content = document.createElement("p");
    Content.setAttribute("class","Description");
    Content.innerHTML = `<b>Content :</b>${article.content}`;

    main.append(title,ImageBox,Description,Content);
    ImageBox.append(ImageBox2);
    ImageBox2.append(Image);
}

let searchbar = document.querySelector("#searchbar");
searchbar.addEventListener("keypress",function(event)
{
    // console.log("event :",event);
    if(event.key == "Enter")
    {
        console.log("Press");
        let search_term = document.querySelector("#searchbar").value;
        if(search_term == "cricket")
        {
            storeSearchterm(search_term)
        }
    }
});