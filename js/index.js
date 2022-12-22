// referrence the form
const myform = document.getElementById("github-form")


// add event listener
myform.addEventListener("submit",  function(e){
    e.preventDefault()

    
    const userName = document.getElementById("search").value
    console.log(userName)
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
           displayUsers(data)
            }
      
   }).catch(error => console.log(error.message))


   // repos url 
   fetch(reposUrl).then(response => response.json())
   .then(repos => {
    

    repos.forEach(repo => {
       console.log(repo)
       displayrepos(repo)
       
    })
    
   })
  
})


const displayUsers = (data) => {
      
  const userlist = document.getElementById("user-list")
  
  const image = document.createElement('img')
  image.setAttribute('width', '100%')
  image.setAttribute("height", "40%")
  image.src = data.avatar_url

  const user = document.createElement("h3")
  user.textContent = data.name

  const link = document.createElement("a")
  link.href = data.html_url
  link.setAttribute("target", "_blank")
  link.textContent = "see fullprofile"

  userlist.appendChild(image)
  userlist.appendChild(user)
  userlist.appendChild(link)
 


 }

 // repo list
 const displayrepos = (repo) => {

   const repos = document.getElementById("repos-list")

   const repoName = document.createElement("li")
   repoName.textContent = repo.name

   repos.appendChild(repoName)
 
}