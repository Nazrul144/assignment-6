console.log("Connected!");

const loadData = async (inputText) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputText}`)
    const data = await response.json();
    const posts = data.posts;
    showingPosts(posts);
}






const showingPosts = (posts) =>{
    
    const postsContainer = document.getElementById('card-container');
    //Clear card-container before adding new card:
    postsContainer.textContent = ''

    posts.forEach((post)=>{
        console.log(post);

        //Create a div element:
        const div = document.createElement('div');
        div.classList = `card bg-[#F3F3F5] shadow-xl py-8 `;
        div.innerHTML = `
        <div class = "h-4 w-4 rounded-full absolute ml-28 mt-6 bg-green-400">
        </div>
        <div class="flex">
        <div class="ml-8 mt-8 ">
            <figure><img class = "w-24 h-24 rounded-lg" src="${post.image}" alt="Shoes" /></figure>
        </div>
        <div class="card-body ">
            <h2 class="card-title">#<span>${post.category}<span class ="ml-4">Author:</span> ${post.author.name}</span></h2>
            <p class = "text-xl font-bold">${post.title}</p>
            <p>${post.description}</p>
            <hr>
            <div class="flex justify-evenly gap-28">
              <div class="flex gap-8">
                <div><i class="fa-regular fa-message"></i> <span>${post.comment_count}</span></div>
              <div><i class="fa-regular fa-eye"></i><span></span> ${post.view_count}</div>
              <div><i class="fa-regular fa-clock"></i><span> ${post.posted_time} min</span></div>
              </div>
              <div>
                <button onclick ="addingAnotherInfo('${post.title}','${post.view_count}')" class = "bg-[#10B981] w-10 h-10  rounded-full"><i class="fa-regular fa-envelope-open"></i></button>
            </div>
            </div>
           
          </div>
    </div> 
  </div>
        `;
        postsContainer.appendChild(div);

    })
}

let sum = 1;
const addingAnotherInfo = (title,view_count) =>{

  //Card-Counting: 
  const currentCard = document.getElementById('countCard');
  const convertToNumber = +currentCard.innerText; 
  let countingTotalCard = parseInt(convertToNumber) + sum;
  console.log(countingTotalCard);
  currentCard.innerHTML = countingTotalCard; 


  console.log(title, view_count);
  const addingAuthorInfo = document.getElementById('addingAuthorInfo');

  const div = document.createElement('div');
  div.classList = `bg-white rounded-lg flex justify-between px-4 py-2 shadow-2xl mt-4 font-bold`
  div.innerHTML = `
  <h1>${title}</h1>
  <p><i class="fa-regular fa-eye"></i><span>${view_count}</span></p>
  `;
  addingAuthorInfo.appendChild(div);

}

//Latest Post: 
const latestPost = async() =>{
  const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const latestPosts = await response.json();
  displayLatestPosts(latestPosts);
  
}

const displayLatestPosts = (latestPosts) =>{
  const latestPostContainer = document.getElementById('latestPostContainer');

  latestPosts.forEach((latestPost) =>{
    console.log(latestPost);
       const div = document.createElement('div');
       div.classList = ` card card-compact w-96 bg-base-100 shadow-xl `


       div.innerHTML = ` 
       <div class="card card-compact w-96 h-full bg-base-100 shadow-xl">
                    <figure><img src="${latestPost.cover_image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title"><i class="fa-regular fa-calendar"></i><span>${latestPost.author?.posted_date? latestPost.author.posted_date:'No publish date'}</span></h2>
                      <p class = "font-bold text-xl">${latestPost.title}</p>
                      <p>${latestPost.description}</p>
                      <div class="flex gap-2 items-center">
                        <div>
                        <img class = "w-11 h-11 rounded-full" src="${latestPost.profile_image}" alt="">
                        </div>
                        <div>
                        <p class = "font-bold text-xl">${latestPost.author.name}</p>
                        <p class = "font-bold text-xl">${latestPost?.author?.designation || 'Unknown'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
       `;
       latestPostContainer.appendChild(div);
  })
}



//Search Function:
const inputSearchField = () =>{
  const inputSearchField = document.getElementById('inputSearchField');
  const inputText = inputSearchField.value;
  loadData(inputText);
}

latestPost();

loadData('');