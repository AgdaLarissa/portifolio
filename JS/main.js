
function home() {
    document.getElementById("main").style.display = 'grid';
    document.getElementById("sobre").style.display = 'none';
    document.getElementById("contato").style.display = 'none';
}
function sobre() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("sobre").style.display = 'grid';
    document.getElementById("contato").style.display = 'none';
}
function contato() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("sobre").style.display = 'none';
    document.getElementById("contato").style.display = 'grid';
}
