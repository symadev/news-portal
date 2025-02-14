 //fetch the category 
  
  const loadCategory = async() =>{


    const response =  await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    const categoryBarContainer = document.getElementById("category-bar-container");
   data.data.news_category.forEach((item) => {
const div = document.createElement("div");
div.innerHTML=`<button onclick="loadNews('${item.category_id}')" class="btn btn-ghost">${item.category_name}</button> `;
    
    

categoryBarContainer.appendChild(div);
});

};


//fetch the news details
const loadNews = async(catId) =>{


    const response =  await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);//catId--> for showing the specific category
    const data = await response.json();
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML='';//for showing the specific content

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
                <button class="btn btn-primary bg-white text-black border-0 ">Show Details</button>
              </div>
            </div>
                
          
      `;

      newsContainer.appendChild(div);
});



};

// search box-Implementation
const handleSearch =()=>{
  const value= document.getElementById("search-box").value;
  
  if(value){
    loadNews(value);
  }
  else{
    alert ("Please enter the valid catId");
  }
}









loadNews("01");//by-default
loadCategory();