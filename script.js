const $html = document.querySelector(' html ')

const $checkbox = document.querySelector('#chk')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('clown-mode')
})

function toggleTheme() {
    var body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("clown-mode")) {
    body.classList.remove("clown-mode");
    } else {
    body.classList.add("clown-mode");
    }
}