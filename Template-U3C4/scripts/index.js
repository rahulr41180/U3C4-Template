
import sidebar from "../components/sidebar.js"

import { apiCall, appendArticles } from "../scripts/main.js";

import storeSearchterm from "../scripts/search.js"
document.querySelector("#sidebar").innerHTML = sidebar();

let url = "https://shrouded-earth-23381.herokuapp.com/api/headlines/india";
let res = apiCall(url);
let articles = await res;
console.log("articles :",articles);



let main = document.querySelector("#main");
appendArticles(articles,main);

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
            storeSearchterm(search_term);
        }
    }
});