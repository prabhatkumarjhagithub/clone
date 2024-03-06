let getUser = document.querySelector("#getUser")

getUser.addEventListener("click", function(){
  getNewUSer();
})

function getNewUSer(){
  fetch(`https://randomuser.me/api/`)
.then(raw=> raw.json())
.then(result => {
  const {name, email, gender, picture } = result.results[0];
  document.querySelector("#parent").innerHTML += `<div class="card w-60 p-5 rounded-xl bg-zinc-800">
  <div class="w-20 h-20 bg-zinc-500 rounded-full mb-3 overflow-hidden">
    <img src="${picture.large}" class="w-full h-full fit-cover" alt="">
  </div>
  <h3  class="font-semibold text-2xl">${name.first} ${name.last}</h3>
  <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
  <h6 class="text-sm opacity-40">${email}</h6>
  <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt modi praesentium dolorem!</p>
</div>`;
})
}