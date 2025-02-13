const loadCategory = async() =>{


    const response =  await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    const categoryBarContainer = document.getElementById("category-bar-container");
   data.data.news_category.forEach((item) => {
const div = document.createElement("div");
div.innerHTML=`<button class="btn btn-ghost">${item.category_name}</button> `;
    
    

categoryBarContainer.appendChild(div);
});

};



const loadNews = async() =>{


    const response =  await fetch("https://openapi.programming-hero.com/api/news/category/01");
    const data = await response.json();
    const newsContainer = document.getElementById("news-container");
data.data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML=` <div class="hero-content flex-col lg:flex-row">
              <img
                src=${item.thumbnail_url}
                class="max-w-sm  h-[300px] rounded-lg " />
              <div>
                <h1 class="text-3xl font-bold">${item.title}</h1>
                <p class="py-6">
                  ${item.details.slice(0,250)}  
                </p>
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>
                
          
      `;

      newsContainer.appendChild(div);
});



};


loadNews();
loadCategory();