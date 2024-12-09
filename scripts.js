// Define the colors and their corresponding CSS variable names, for rendering the color cubes 
// In this case, this is the everforest theme. 
// I commented out the bg-dim color because it is used as the main background, so the cube would be invisible if rendered.
const colors = {
    // 'bg-dim': '#293136',
    'bg0': '#333C43',
    'bg1': '#3A464C',
    'bg2': '#434F55',
    'bg3': '#4D5960',
    'bg4': '#555F66',
    'bg5': '#5D6B66',
    'bg-red': '#5C3F4F',
    'bg-visual': '#59464C',
    'bg-yellow': '#55544A',
    'bg-green': '#48584E',
    'bg-blue': '#3F5865',
    'red': '#E67E80',
    'orange': '#E69875',
    'yellow': '#DBBC7F',
    'green': '#A7C080',
    'blue': '#7FBBB3',
    'aqua': '#83C092',
    'purple': '#D699B6',
    'statusline1': '#A7C080',
    'statusline2': '#D3C6AA',
    'statusline3': '#E67E80',
    'gray0': '#7A8478',
    'gray1': '#859289',
    'gray2': '#9DA9A0',
    'fg': '#D3C6AA'
};

// Using https://www.flaticon.com/ for icons on this case
const linkPages = [
    // 1. Favorites: Easy access to frequently used links
    {
        title: "Favoritos",
        icon: "icons/favorites.svg",
        color: colors.red,
        links: [
            { "text": "ChatGPT", "url": "https://chatgpt.com/", "iconUrl": "icons/chatgpt.png" },
            { "text": "Figma", "url": "https://www.figma.com", "iconUrl": "icons/figma.png" },
            { "text": "GitHub", "url": "https://github.com/juanmata42", "iconUrl": "icons/github.png" },
            { "text": "Calendar", "url": "https://calendar.google.com/calendar/u/0/r", "iconUrl": "icons/calendar.png" },
            { "text": "Google Keep", "url": "https://keep.google.com/#home", "iconUrl": "icons/keep.png" },
            { "text": "ChatGPT", "url": "https://chatgpt.com/", "iconUrl": "icons/chatgpt.png" },
            { "text": "Confluence", "url": "https://www.atlassian.com/es/software/confluence", "iconUrl": "icons/confluence.png" },
            { "text": "Google Drive", "url": "https://drive.google.com/drive/shared-with-me", "iconUrl": "icons/drive.png" },
            { "text": "Factorial", "url": "https://app.factorialhr.com/dashboard", "iconUrl": "icons/factorial.png" },
        ]
    },
    // 2. Productivity: Tools for organizing and managing tasks
    {
        title: "Productividad",
        icon: "icons/productivity.svg",
        color: colors.green,
        links: [
            { "text": "Calendar", "url": "https://calendar.google.com/calendar/u/0/r", "iconUrl": "icons/calendar.png" },
            { "text": "Google Keep", "url": "https://keep.google.com/#home", "iconUrl": "icons/keep.png" },
            { "text": "Notion", "url": "https://www.notion.so/", "iconUrl": "icons/notion.png" },
            { "text": "Miro", "url": "https://miro.com/app/dashboard/", "iconUrl": "icons/miro.png" },
        ]
    },
    // 3. Work: Links related to professional tasks and tools
    {
        title: "Documentación",
        icon: "icons/documentation.svg",
        color: colors.blue,
        links: [
            { "text": "Jira", "url": "https://www.atlassian.com/es/software/jira", "iconUrl": "icons/jira.png" },
            { "text": "Confluence", "url": "https://www.atlassian.com/es/software/confluence", "iconUrl": "icons/confluence.png" },
            { "text": "Factorial", "url": "https://app.factorialhr.com/dashboard", "iconUrl": "icons/factorial.png" },
            { "text": "AWS", "url": "https://aws.amazon.com/es/?nc2=h_lg", "iconUrl": "icons/aws.png" },
        ]
    },
    // 4. Design: Tools for visual work and design collaboration
    {
        title: "Diseño",
        icon: "icons/design.svg",
        color: colors.orange,
        links: [
            { "text": "Figma", "url": "https://www.figma.com", "iconUrl": "icons/figma.png" },
            { "text": "Miro", "url": "https://miro.com/app/dashboard/", "iconUrl": "icons/miro.png" },
        ]
    },
    // 5. Development: Tools for coding, repositories, and AI
    {
        title: "Desarrollo",
        icon: "icons/development.svg",
        color: colors.yellow,
        links: [
            { "text": "GitHub", "url": "https://github.com/juanmata42", "iconUrl": "icons/github.png" },
            { "text": "ChatGPT", "url": "https://chatgpt.com/", "iconUrl": "icons/chatgpt.png" },
            { "text": "AWS", "url": "https://aws.amazon.com/es/?nc2=h_lg", "iconUrl": "icons/aws.png" },
        ]
    },
    // 6. Communication: Tools for email and messaging
    {
        title: "Comunicación",
        icon: "icons/communication.svg",
        color: colors.purple,
        links: [
            { "text": "Gmail", "url": "https://mail.google.com/mail/u/0/#inbox", "iconUrl": "icons/gmail.png" },
        ]
    },
];

// Array of image paths. Add more images to the array to display them randomly
// Don't just use the biggest res possible, since loading times will be longer. 
// In my case, a 1000x750 px jpg image is more than enough, i can't appreciate the pixels on my 1920x1080 screen. it weights 329kb
// naming of the pictures doesn't matter, the function chooses a random index from the array
// it's good practice to have them all with the same proportions, so the links are always in the same place
const images = [
    'pics/1.jpg',
    'pics/2.jpg',
    'pics/3.jpg',
    // Add more images here
];

document.addEventListener("DOMContentLoaded", function () {

    // Select the container where the divs will be added
    const container = document.getElementById('color-box__container');

    // Iterate over the colors object to create divs for each color
    for (const color in colors) {
        // Create a new div element
        const colorBox = document.createElement('div');
        // Add classes to the div
        colorBox.className = `color-box ${color}`;

        // Set the ID to the color name
        colorBox.id = color;

        // Set the background color using the CSS variable
        colorBox.style.backgroundColor = `var(--${color})`;

        // Optional: Add text inside the div to display the color name or code
        //colorBox.textContent = `${color}: ${colors[color]}`;

        // Append the new div to the container
        container.appendChild(colorBox);
    }

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * images.length);

    // Get the randomly selected image path
    const randomImagePath = images[randomIndex];

    // Create a div for the picture container
    const pictureContainer = document.createElement('div');
    pictureContainer.className = 'picture-container'; // Add the class for styling

    // Create an img element
    const img = document.createElement('img');
    img.src = randomImagePath;  // Set the image source to the randomly selected image
    img.className = 'aside-picture';  // Set the class for styling

    // Append the img to the picture container
    pictureContainer.appendChild(img);

    // Get the container div by its ID
    const mainContainer = document.getElementById('main-container');
    const calendarContainer = document.getElementById('calendar-container');
    // Append the new img element to the container
    calendarContainer.appendChild(pictureContainer);

    // Get links container
    const linksContainer = document.getElementById('links-container');
    // Iterate through linkPages and create the UI elements
    linkPages.forEach((page, index) => {
        // Create the linksPage container
        const linksPage = document.createElement('div');
        linksPage.className = `links-page page-${index}`; // Add a class for styling
        linksPage.id = `page-${index}`; // Assign an ID based on the index
        // Create the heade element that contains the title and the icon
        const linksPageHeader = document.createElement('div');
        linksPageHeader.className = 'links-page-header'; // Add a class for styling
        linksPageHeader.style.borderColor = page.color; // Set the border color

        // Create the page interior container
        const pageInteriorContainer = document.createElement('div');
        pageInteriorContainer.className = 'page-interior-container'
        pageInteriorContainer.style.borderColor = page.color; // Set the border color
        // Create the title element
        const linksPageTitle = document.createElement('h1');
        linksPageTitle.className = 'links-page-title'; // Add a class for styling
        linksPageTitle.textContent = page.title; // Set the title text

        // Create the icon element
        const linksPageIcon = document.createElement('img');
        linksPageIcon.className = 'links-page-icon'; // Add a class for styling
        linksPageIcon.src = page.icon; // Set the icon source
        linksPageIcon.alt = `${page.title} Icon`; // Add alt text

        // Append the title and icon to the header
        linksPageHeader.appendChild(linksPageIcon);
        linksPageHeader.appendChild(linksPageTitle);
        // Append the Header to the interior container
        pageInteriorContainer.appendChild(linksPageHeader);

        // Create the indexTab container
        const indexTab = document.createElement('div');
        indexTab.className = `index-tab page-${index}`; // Add a class for styling
        indexTab.id = `index-tab-${index}`; // Assign an ID based on the index
        indexTab.style.backgroundColor = page.color; // Set the background color
        // Create another icon inside the indexTab
        const indexTabIcon = document.createElement('img');
        indexTabIcon.className = 'index-tab-icon'; // Add a class for styling
        indexTabIcon.src = page.icon; // Set the icon source
        indexTabIcon.alt = `${page.title} Icon`; // Add alt text
        // Append the icon to the indexTab
        indexTab.appendChild(indexTabIcon);
        const linksGrid = document.createElement('div')
        linksGrid.className = 'links-grid';
        // Add individual links to the indexTab
        page.links.forEach(link => {
            const linkItem = document.createElement('a');
            linkItem.className = 'link-item'; // Add a class for styling
            linkItem.href = link.url; // Set the link URL
            linkItem.target = '_self'; // Open links in same tab
            const linkIconContainer = document.createElement('div');
            linkIconContainer.className = 'link-icon-container'; // Add a class for styling
            const linkIcon = document.createElement('img');
            linkIcon.className = 'link-icon'; // Add a class for styling
            linkIcon.src = link.iconUrl; // Set the link's icon
            linkIcon.alt = `${link.text} Icon`;
            linkIconContainer.appendChild(linkIcon);
            const linkText = document.createElement('span');
            linkText.className = 'link-text'; // Add a class for styling
            linkText.textContent = link.text;

            // Append icon and text to the link
            linkItem.appendChild(linkIconContainer);
            linkItem.appendChild(linkText);

            // Append the link to the indexTab
            linksGrid.appendChild(linkItem);
        });
        pageInteriorContainer.appendChild(linksGrid)
        // Append links to Page interior container
        linksContainer.appendChild(linksPage);
        // Append title, icon, and indexTab to the linksPage
        linksPage.appendChild(pageInteriorContainer);
        linksPage.appendChild(indexTab);
        // get height of link-item
        const linkHeight = document.querySelector('.link-item').clientHeight;
        addRowBorders(pageInteriorContainer, linkHeight, page.color, 90);
        // Append the linksPage to the linksContainer
    });

    // Append the links container to the main container
    mainContainer.appendChild(linksContainer);
});
function addRowBorders(container, linkHeight, color, paddingTop) {
    const containerHeight = container.clientHeight;
    const rowHeight = linkHeight + 16; // Link height + gap
    const totalRows = Math.floor((containerHeight - paddingTop) / rowHeight);

    for (let i = 1; i <= totalRows; i++) {
        const border = document.createElement('div');
        border.style.position = 'absolute';
        border.style.top = `${(i * rowHeight) + paddingTop}px`;
        border.style.left = '0';
        border.style.width = '100%';
        border.style.height = '1px';
        border.style.zIndex = 2;
        border.style.backgroundColor = color; // Use your desired color
        container.appendChild(border);
    }
}