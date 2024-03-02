console.log("Connected!");

const loadData = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json();
    const posts = data.posts;
    showingPosts(posts)
}

const showingPosts = (posts) =>{
    
    const postsContainer = document.getElementById('card-container');
    posts.forEach((post)=>{
        console.log(post);

        //Create a div element:
        const div = document.createElement('div');
        div.classList = `card lg:w-7/12 bg-base-100 shadow-xl py-8`;
        div.innerHTML = `
        <div class="flex">
        <div class="ml-8 mt-8 ">
            <figure><img class = "w-20 h-20 rounded-lg" src="${post.image}" alt="Shoes" /></figure>
        </div>
        <div class="card-body ">
            <h2 class="card-title">Music <span>Author: Nazrul Islam</span></h2>
            <p>10 Kids Unaware of Their Halloween Costume</p>
            <p>10 Kids Unaware of Their Halloween Costume</p>
            <hr>
            <div class="flex justify-evenly gap-28">
              <div class="flex gap-8">
                <div><i class="fa-regular fa-message"></i></div>
              <div><i class="fa-regular fa-eye"></i></div>
              <div><i class="fa-regular fa-clock"></i></div>
              </div>
              <div>
                <i class="fa-regular fa-envelope-open"></i>
            </div>
            </div>
           
          </div>
    </div> 
  </div>
        
        `;
        postsContainer.appendChild(div);

    })
}

loadData();