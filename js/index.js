
// referrence the form
const myform = document.getElementById("github-form")


// add event listener
myform.addEventListener("submit",  function(e){
    e.preventDefault()

    const userName = document.getElementById("search").value
  console.log(userName)
    // const fullName = search.split(' ').join('')
  let usersUrl = `https://api.github.com/users/${userName}`
  let reposUrl = `https://api.github.com/users/${userName}/repos`

   fetch(usersUrl).then((result) => result.json())
   .then((data) => {
        if(data.message){
            document.getElementById("user-list").innerHTML = `
              <h3> user not found </h3>
            `
        }else{
           console.log(data)
           const userlist = document.getElementById("user-list")
           userlist.innerHTML = `
           <img src = "${data.avatar_url}"
           styles = "width: 100%" "height: 40%">
            <a>${data.name}</a>
            <a  target="_black" href="${data.html_url}">see full profile here</p>
           `
        //    data.name.addEventListener("click", () => {
        
         
            // fetch(reposUrl).then((result) => result.json())
            // .then((data) => {
            //     console.log(data)
            //     const repolist = document.getElementById("repos-list")
            //    const li = document.createElement("li")
            //    repolist.textContent = repo.name
            //    repolist.appendChild(li)

            // })

        
        }
   }).catch(error => console.log(error.message))


} )

