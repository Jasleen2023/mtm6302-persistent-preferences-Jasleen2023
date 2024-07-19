document.addEventListener('DOMContentLoaded', () => {
    const dynamicList = document.getElementById('dynamic-list');
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');

    // Function to add items to the list
    function addItems() {
        for (let i = 1; i <= 10; i++) {
            const li = document.createElement('li');
            li.textContent = `Item ${i}`;
            dynamicList.appendChild(li);
        }
    }

    // Function to apply preferences
    function applyPreferences() {
        const theme = localStorage.getItem('theme') || 'theme1';
        const listStyle = localStorage.getItem('listStyle') || 'style1';
        
        document.body.className = theme;
        dynamicList.className = listStyle;

        themeSelect.value = theme;
        listStyleSelect.value = listStyle;
    }

    // Event listeners for preferences change
    themeSelect.addEventListener('change', (e) => {
        const theme = e.target.value;
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    });

    listStyleSelect.addEventListener('change', (e) => {
        const listStyle = e.target.value;
        dynamicList.className = listStyle;
        localStorage.setItem('listStyle', listStyle);
    });

    // Initial setup
    addItems();
    applyPreferences();
});
