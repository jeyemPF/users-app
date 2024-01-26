fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        const userList = document.querySelector('ul');

        // Update the part where the user image is added to each list item
        data.forEach(user => {
            const address = user.address;
            
            // Generate a random number for the placeholder image
            const randomImageId = Math.floor(Math.random() * 1000);

            const markup = `
                <li>
                    <div class="user-info">
                        <strong>${user.name}</strong><br>
                        Email: ${user.email}<br>
                        Address: ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}<br>
                    </div>
                    <div class="user-image-container">
                        <img src="https://picsum.photos/200/200?random=${randomImageId}" alt="User Image" style="border-radius: 100%; width: 50px; height: 50px">
                    </div>
                </li>`;
            userList.insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const icon = document.getElementById("darkModeIcon");
    
        // Toggle between moon and sun icons based on dark mode
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("far", "fa-moon");
            icon.classList.add("fas", "fa-sun");
        
            icon.style.color = "#fff"; // Set icon color to white in dark mode
            icon.style.backgroundColor = "#312f3a"; // Set background color to dark mode background
        } else {
            icon.classList.remove("fas", "fa-sun");
            icon.classList.add("far", "fa-moon");
            icon.style.color = "#312f3a"; // Set icon color to dark mode text color
            icon.style.backgroundColor = "#fff"; // Set background color to white in light mode
        }
    
        updateLiHoverStyles(); // Update list item hover styles after toggling dark mode
    }
    

    function updateLiHoverStyles() {
        const isDarkMode = document.body.classList.contains("dark-mode");
        const liElements = document.querySelectorAll("ul li");
    
        liElements.forEach(li => {
            if (isDarkMode) {
                li.classList.add("dark-hover");
            } else {
                li.classList.remove("dark-hover");
            }
        });
    }

// add user



    function filterUsers() {
        const searchInput = document.getElementById("searchInput");
        const filter = searchInput.value.toLowerCase();
        const liElements = document.querySelectorAll("ul li");
    
        liElements.forEach((li) => {
            const userName = li.querySelector("strong").textContent.toLowerCase();
            if (userName.includes(filter)) {
                li.style.display = "flex"; // Show the list item if it matches the search
            } else {
                li.style.display = "none"; // Hide the list item if it doesn't match the search
            }
        });
    }
    
    // Attach an event listener to the search input
    document.getElementById("searchInput").addEventListener("input", filterUsers);
function addUser() {
    const form = document.getElementById("userForm");
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const street = form.elements["street"].value;
    const suite = form.elements["suite"].value;
    const city = form.elements["city"].value;
    const zipcode = form.elements["zipcode"].value;

    // You can add validation and other fields as needed

    const userList = document.querySelector('ul');

    // Create a new list item with the user's information
    const markup = `
        <li>
            <div class="user-info">
                <strong>${name}</strong><br>
                Email: ${email}<br>
                Address: ${street}, ${suite}, ${city}, ${zipcode}<br>
                <!-- Add other fields here -->
            </div>
            <div class="user-image-container">
                <img src="https://placekitten.com/200/200" alt="User Image" style="border-radius: 100%; width: 50px; height: 50px">
            </div>
        </li>`;

    // Insert the new list item at the end of the list
    userList.insertAdjacentHTML('beforeend', markup);

    // Clear the form fields after adding the user
    form.reset();
}
    

// ... (existing code)

function addUser() {
    const form = document.getElementById("userForm");
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const street = form.elements["street"].value;
    const suite = form.elements["suite"].value;
    const city = form.elements["city"].value;
    const zipcode = form.elements["zipcode"].value;

    // You can add validation and other fields as needed

    const userList = document.querySelector('ul');

    // Create a new list item with the user's information
    const markup = `
        <li>
            <div class="user-info">
                <strong>${name}</strong><br>
                Email: ${email}<br>
                Address: ${street}, ${suite}, ${city}, ${zipcode}<br>
                <!-- Add other fields here -->
            </div>
            <div class="user-image-container">
                <img src="https://placekitten.com/200/200" alt="User Image" style="border-radius: 100%; width: 50px; height: 50px">
            </div>
        </li>`;

    // Insert the new list item at the end of the list
    userList.insertAdjacentHTML('beforeend', markup);

    // Clear the form fields after adding the user
    form.reset();
}


