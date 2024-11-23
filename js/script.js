// Función para manejar la búsqueda
function handleSearch(event) {
    event.preventDefault();
    let query = document.getElementById("searchInput").value;
    alert("Buscando: " + query);
    return false;  // Prevenir el comportamiento por defecto del formulario
}
