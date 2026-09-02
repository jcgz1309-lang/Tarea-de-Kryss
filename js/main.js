document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const obraCards = document.querySelectorAll('.obra-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cambiar clase activa entre botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filtrar las tarjetas de obras
            obraCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'todos' || filterValue === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});