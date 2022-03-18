// when the user  clicks the purches button , render out
// something went wrong  please try again later
// that has the  id="error".

let errorMessage = document.getElementById("error")

function purchase(){
    errorMessage.innerText = "Something wen wrong please try again later"

}