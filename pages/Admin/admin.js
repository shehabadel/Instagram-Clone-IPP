const reportedPosts=[{
    postID:"288121",
    postUser:"Shehab Adel",
    userID:"28122",
    postText:"I am saying bad words here so I got reported",
}]
$('document').ready(function () {
    simGETReported()
    deleteBtnFn()
    logout()
})

/**
 * Simulates destroying a session and emptying a cookie and redirects to login page
 */

function logout() {
    var logout = $('#logout')
    logout.click(function () {
        window.location.replace("../Login/Login.html");
    })
}

/**
 * Simulates making a GET request on all reported Posts from a database to be fetched
 * in a table.
 */

function simGETReported() {
    var reported = $('.reported-posts-wrapper')
    for (let i = 0; i < reportedPosts.length; i++) {
        var reportedPost= `
        <tr>
        <th scope="row">${reportedPosts[i].postID}</th>
        <td>${reportedPosts[i].postUser}</td>
        <td>${reportedPosts[i].userID}</td>
        <td>${reportedPosts[i].postText}</td>
        <th scope="col"><button type="button" class="btn btn-danger del-btn">delete post</button></th>
        </tr>`
        reported.append(reportedPost);
    }
}

/**
 * Simulates making a DELETE request on specific post from the database and table.
 */
function deleteBtnFn(){
    var delBtns = document.querySelectorAll('.del-btn')
    
    delBtns.forEach((btn)=>{
        btn.onclick=function(e) {
            var btnTh= e.target.parentNode
            var deletedRow = btnTh.parentNode
    
            deletedRow.innerHTML=''
        }
    })
}