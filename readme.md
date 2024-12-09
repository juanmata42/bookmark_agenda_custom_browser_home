Custom Browser Home
Here’s a README that explains the objective of the project, along with detailed instructions on customizing and setting it up as a custom new tab page.

---

# Custom Browser Home 🌈

> A minimalistic, customizable new tab page to organize your links and add a touch of personalization to your browsing experience.

This project lets you set up a clean and distraction-free browser homepage that displays:
- A set of color squares from a pre-defined palette
- A randomly chosen image of your choice
- A collection of links with their icons, all styled for a minimalist look

---

## 🚀 Demo

Check out the homepage in action here: [Demo](https://juanmata42.github.io/browser_custom_home/).

---

## 🌟 Features

- **Minimalistic Design:** A simple interface to keep your homepage clean and distraction-free.
- **Customizable Colors:** Choose and display colors for visual appeal or theme matching.
- **Random Image:** Display a randomly chosen image each time you open a new tab.
- **Custom Links with Icons:** Add quick-access links with icons for easy navigation.

---

## 📖 Getting Started

### Installation

1. **Clone the repository** to your local machine:
    ```bash
    git clone https://github.com/username/repo-name.git
    cd repo-name
    ```

2. **Set up the project** as your new tab page:
   - Save the `index.html`, `styles.css`, `scripts.js`, and all other folders in a directory.
   - Open your browser settings and set the `index.html` file as the new tab page in your browser.

---

## 📂 Project Structure

```plaintext
repo-name/
├── font/                  # Custom fonts
├── icons/                 # Link icons (e.g., Gmail, GitHub)
├── pics/                  # Background images
├── index.html             # Main HTML file
├── scripts.js             # JavaScript for dynamic rendering
├── styles.css             # Styles for the homepage
└── tab_icon.svg           # Custom favicon for the new tab
```

---

## 🛠️ Customization Guide

You can easily customize this homepage to match your style. Below are step-by-step instructions for common customizations:

### 1. Change the Color Palette
- Open `scripts.js` and look for the `colors` object.
- Modify any of the color hex codes to your preferred colors. For example:
    ```javascript
    const colors = {
        'bg0': '#YOUR_COLOR_CODE',
        // ...
    };
    ```
- Save your changes, and refresh the page to see the new colors.

### 2. Add or Change Links and Icons

To add or modify links, edit the `linkPages` array in `scripts.js`. Each category is defined with the following structure:

```javascript
const linkPages = [
    {
        title: "Category Title",   // Name of the category
        icon: "icons/category-icon.svg",  // Icon for the category
        color: colors.bg0,    // The background color for the category
        links: [   // Links inside the category
            { 
                text: "Link Text",  // Text to display
                url: "https://link-url.com",  // URL to open
                iconUrl: "icons/link-icon.svg" // Icon for the link
            },
            // Add more links here...
        ]
    },
    // Add more categories as needed...
];
```

### Example:

```javascript
const linkPages = [
    {
        title: "Favorites",
        icon: "icons/favorites.svg",
        color: colors.red,
        links: [
            { "text": "ChatGPT", "url": "https://chatgpt.com/", "iconUrl": "icons/chatgpt.png" },
            { "text": "Figma", "url": "https://www.figma.com", "iconUrl": "icons/figma.png" },
            { "text": "GitHub", "url": "https://github.com/juanmata42", "iconUrl": "icons/github.png" }
        ]
    },
    {
        title: "Productivity",
        icon: "icons/productivity.svg",
        color: colors.green,
        links: [
            { "text": "Notion", "url": "https://www.notion.so/", "iconUrl": "icons/notion.png" },
            { "text": "Google Keep", "url": "https://keep.google.com", "iconUrl": "icons/keep.png" }
        ]
    }
];
```

#### Key Fields:
- **`title`**: The name of the category (e.g., "Favorites", "Work").
- **`icon`**: The path to the category's icon.
- **`color`**: The color applied to the category's background (choose from the predefined `colors` object).
- **`links`**: An array of individual links within this category. Each link has:
  - **`text`**: The name or description of the link.
  - **`url`**: The URL for the link.
  - **`iconUrl`**: The path to the link's icon (must be placed in the `icons` folder).

After modifying the `linkPages` array, save your changes and refresh the page to see the updated categories and links.

### 3. Add Background Images
- Place your preferred background images in the `pics` folder.
- Add the image filenames to the `images` array in `scripts.js`:
    ```javascript
    const images = [
        'pics/1.jpg',
        'pics/2.jpg',
        // Add your image files here
    ];
    ```
- Save your changes, and refresh the page to display a random image on each load.

### 4. Change the Font
- Download a new font from [Google Fonts](https://fonts.google.com/) or similar.
- Place the `.ttf` file in the `font` folder.
- Update the `@font-face` section in `styles.css`:
    ```css
    @font-face {
        font-family: 'your-font-name';
        src: URL('./font/YourFontFile.ttf') format('truetype');
    }
    ```
- Change `font-family` in `body` style to your new font:
    ```css
    font-family: 'your-font-name', sans-serif;
    ```

### 5. Customize the Page Title and Tab Icon
- To change the page title, open `index.html` and modify the `<title>` tag:
    ```html
    <title>My Custom Home</title>
    ```
- To change the tab icon (favicon), replace `tab_icon.svg` with your icon and keep the same file name, or change the link in `index.html`:
    ```html
    <link rel="icon" type="image/svg" href="path/to/your_icon.svg">
    ```
---

## 🌐 Setting as a Custom New Tab Page in Google Chrome

Google Chrome doesn’t directly support setting a local HTML file as the new tab page. However, you can use an extension to achieve this. Here’s how:

1. **Enable Developer Mode:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** by toggling it on (usually in the top-right corner).

2. **Load the "Extension" :**
   - Go back to `chrome://extensions/`, click on **Load unpacked** and select the project folder.
   - This will load the project as an extension, and your custom homepage will now appear every time you open a new tab.

---
## 🎨 Applying a Color Palette Theme with GIMP

To give an image a cohesive color palette theme in GIMP, follow these steps:

1. **Open the Picture**  
   - Start by opening the picture you want to modify in GIMP.

2. **Generate the Color Palette**  
   - If you don’t already have a color palette saved in GIMP, open a reference picture with the desired colors (e.g., `dark-soft.png` in the root folder).

3. **Create a Custom Palette**  
   - With the palette reference image open, go to **Image > Mode > Indexed**.
   - Select **Generate optimum palette** and click **Convert**. You should now see a custom palette on the right side, generated from the colors in the reference image.

4. **Apply the Palette to Your Image**  
   - Switch to the picture you want to adjust.
   - Go to **Image > Mode > Indexed** again.
   - Select **Use custom palette** and choose the newly created palette from the dropdown.
   - Click **Convert** to apply the palette to your image.

5. **Save Your Image**  
   - Once the palette has been applied, save your image, and you’re done!

This process gives your image a uniform color scheme, making it fit seamlessly with your custom browser theme.


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

