document.getElementById('btn').addEventListener('click',showProfile);
function showProfile(){
    
    let username = document.getElementById('gusername').value
    let url = 'https://api.github.com/users/'+username
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            console.log('profile not found')
            document.getElementById('res')=`<h3>Profile not found</h3>`
        }else{
        console.log(data)
        document.getElementById('res').innerHTML=`
        <img src="${data.avatar_url}" >
        <p>
        <h4>username</h4>
    @${data.login}
        </p>
        <p>
        <h5>followers<h5>
        ${data.followers}
        <h5>following<h5>
        ${data.following}
        <h5>repositry<h5>
        ${data.public_repos}
<a href="${data.html_url
        }" target="_blank">
        <button class="btns">check profile</button>
        </a>
        </p>
        `
        }
    }).catch(e=>{
        console.log(e)
        
    })


}