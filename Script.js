document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.Article');

    articles.forEach(article => {
        const btnplus = article.querySelector('.btnplus');
        const btnmoins = article.querySelector('.btn-outline-warning');
        const quantitéElement = article.querySelector('.quantité');
        const removeElement = article.querySelector('.btn-outline-danger');
        const likedElement = article.querySelector('.liked');
        const prixElement = article.querySelector('.Prix');
        const totalElement = article.querySelector('.total');
        
        let quantité = parseInt(quantitéElement.value);
        let prix = parseInt(prixElement.textContent.replace('fcfa', '').trim());

        // Function to update the total price of the item
        const updateItemTotal = () => {
            totalElement.value = quantité * prix;
            updateGrandTotal();
        };

        // Function to update the grand total of all items
        const updateGrandTotal = () => {
            let grandTotal = 0;
            const totals = document.querySelectorAll('.total');
            totals.forEach(total => {
                grandTotal += parseInt(total.value);
            });
            document.querySelector('.Principal .total h2').textContent = `Grand Total: ${grandTotal} fcfa`;

        };

        // Event listener for the plus button
        btnplus.addEventListener('click', () => {
            quantité++;
            quantitéElement.value = quantité;
            updateItemTotal();
        });

        // Event listener for the minus button
        btnmoins.addEventListener('click', () => {
            if (quantité > 0) {
                quantité--;
                quantitéElement.value = quantité;
                updateItemTotal();
            }
        });

        // Event listener for the remove button
        removeElement.addEventListener('click', () => {
            article.remove();
            updateGrandTotal();
        });

        // Event listener for the liked button
        likedElement.addEventListener('click', () => {
            likedElement.classList.toggle('fas'); // Toggle the solid heart icon
            likedElement.classList.toggle('far'); // Toggle the regular heart icon
        });

        // Initialize the total for each item
        updateItemTotal();
    });
});

