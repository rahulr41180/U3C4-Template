async function apiCall(url) {


    //add api call logic here
    try
    {
        let res = await fetch(url);

        let Data = await res.json();

        return Data
    }
    catch(error)
    {
        console.log("error :",error);
    }


}


function appendArticles(articles, main) {
    console.log('main:', main)
    
    console.log('articles:', articles)
    //add append logic here

    articles.map(function(element,index)
    {
        var NewsImageTitleBox = document.createElement("div");
        NewsImageTitleBox.setAttribute("class","NewsImageTitleBox");
        NewsImageTitleBox.addEventListener("click",function()
        {
            console.log("NewsImageTitleBox");
            localStorage.setItem("article",JSON.stringify(element));
            window.location.href = "news.html";
        })

        var TitleBox = document.createElement("div");
        TitleBox.setAttribute("class","TitleBox");
        TitleBox.innerHTML = `<b>Headline :</b> ${element.title}`

        let ImageContentBox = document.createElement("div");
        ImageContentBox.setAttribute("class","ImageContentBox");

        let ImageBox = document.createElement("div");
        ImageBox.setAttribute("class","ImageBox");
        ImageBox.title = element.content;

        let Image = document.createElement("img");
        Image.setAttribute("class","Image");
        Image.src = element.urlToImage;
        // Image.src = element.url;
        let name = document.createElement("p");
        name.setAttribute("class","name");
        name.innerHTML = `<b>Name :</b> ${element.source.name}`

        main.append(NewsImageTitleBox);
        NewsImageTitleBox.append(TitleBox,ImageContentBox);
        ImageContentBox.append(ImageBox,name)
        ImageBox.append(Image)
    })

}

export { apiCall, appendArticles }