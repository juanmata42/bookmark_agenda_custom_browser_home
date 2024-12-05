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

// Array of links. Each link is an object with text, url, and iconUrl properties
const links = [
    { "text": "Calendar", "url": "https://calendar.google.com/calendar/u/0/r", "iconUrl": "icons/calendar.png" },
    { "text": "ChatGPT", "url": "https://chatgpt.com/", "iconUrl": "icons/chatgpt.png" },
    { "text": "Confluence", "url": "https://www.atlassian.com/es/software/confluence", "iconUrl": "icons/confluence.png" },
    { "text": "Google Drive", "url": "https://drive.google.com/drive/shared-with-me", "iconUrl": "icons/drive.png" },
    { "text": "Factorial", "url": "https://app.factorialhr.com/dashboard", "iconUrl": "icons/factorial.png" },
    { "text": "Figma", "url": "https://www.figma.com", "iconUrl": "icons/figma.png" },
    { "text": "GitHub", "url": "https://github.com/juanmata42", "iconUrl": "icons/github.png" },
    { "text": "Gmail", "url": "https://mail.google.com/mail/u/0/#inbox", "iconUrl": "icons/gmail.png" },
    { "text": "Jira", "url": "https://www.atlassian.com/es/software/jira", "iconUrl": "icons/jira.png" },
    { "text": "Google Keep", "url": "https://keep.google.com/#home", "iconUrl": "icons/keep.png" },
    { "text": "Miro", "url": "https://miro.com/app/dashboard/", "iconUrl": "icons/miro.png" },
    { "text": "Notion", "url": "https://www.notion.so/", "iconUrl": "icons/notion.png" },
    { "text": "AWS", "url": "https://aws.amazon.com/es/?nc2=h_lg", "iconUrl": "icons/aws.png" },
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

    // Clear previous images (if any) before appending the new one
    mainContainer.innerHTML = '';

    // Append the new img element to the container
    mainContainer.appendChild(pictureContainer);

    // Create a new div for the links
    const linksContainer = document.createElement('div');
    linksContainer.className = 'links-container';  // Set a class for styling if needed

    // Iterate over the links array to create anchor elements
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;  // Set the href attribute
        a.target = '_self';  // Make the link open in the same tab
        a.className = 'link-item';  // Add a class for styling

        const div = document.createElement('div');  // Create a div element
        div.className = 'icon-container';  // Add a class for the icon container
        a.appendChild(div);  // Append the div to the anchor

        const img = document.createElement('img');  // Create an img element
        img.src = link.iconUrl;  // Set the src attribute to the icon URL
        img.className = 'icon';  // Add a class for the icon
        div.appendChild(img);  // Append the image to the anchor

        const p = document.createElement('p');  // Create a paragraph element
        p.textContent = link.text;  // Set the text of the link
        p.className = 'link-text';  // Add a class for the text
        a.appendChild(p);  // Append the paragraph to the anchor

        linksContainer.appendChild(a);  // Append the anchor to the links container
    });

    // Append the links container to the main container
    mainContainer.appendChild(linksContainer);
});

function setLinksContainerHeight() {
    const pictureContainer = document.querySelector('.aside-picture');
    const linksContainer = document.querySelector('.links-container');
    // get screen width
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024 && pictureContainer && linksContainer) {
        // Get the height of the picture container
        const pictureHeight = pictureContainer.offsetHeight;

        // Set it as the max-height of the links container
        linksContainer.style.maxHeight = `${pictureHeight}px`;
    }

}
// Run the function on page load and page resize
window.addEventListener('load', setLinksContainerHeight);
window.addEventListener('resize', setLinksContainerHeight);