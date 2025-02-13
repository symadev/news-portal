const loadCategory = async() =>{


    const response =  await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    const categoryBarContainer = document.getElementById("category-bar-container");
   data.data.news_category.forEach((item) => {
const div = document.createElement("div");
div.innerHTML=`<button class="btn btn-ghost">${item.category_name}</button> `;
    
    

categoryBarContainer.appendChild(div)
   });

}

loadCategory();