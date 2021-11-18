score = 0;
function updates1() {
    score = score+1;
    document.getElementById("score1").innerHTML="score : "+score;
}
function save1() {
    localStorage.setItem("score1", score);
}
function next1() {
    window.location="activity_2.html";
}