#  Gina's - Portfolio Task
​
[My portfolio site](https://ginahorch.github.io/) 
​
## Project Requirements

### Content
 The portfolio showcases various features designed with a focus on aesthetics and user experience. Below is a summary of each section and the choices made:
- [X] At least one profile picture
    The profile picture is featured prominently in the hero section, styled using **flexbox** for alignment and responsiveness. I used top and bottom margins to center it vertically, a fixed width to maintain consistency across screen sizes, and a contrasting border to draw attention. The rounded appearance was achieved with a high border-radius value, ensuring a polished, approachable look that reflects a modern aesthetic.
- [X] Biography (at least 100 words)
    The About section includes a concise biography to give visitors a brief introduction. For more in-depth information, users can navigate to the about.html page. I structured the content using clear headings and paragraphs to improve readability and used CSS for consistent spacing and layout.
- [X] Functional Contact Form
    A fully functional contact form is available for users to reach out directly from the site. The form includes validation for required fields, ensuring only correctly formatted submissions. I have attached a screenshot showing a successful form submission. Future enhancements may include adding a CAPTCHA or reCAPTCHA to improve security and prevent spam.
- [X] "Projects" section
    The homepage features two highlighted projects with descriptions and images, providing a glimpse into my work. A projects.html page allows users to view additional projects, encouraging further exploration. I aimed to make the project layout visually engaging by using **flexbox** for consistent spacing and responsive design.
- [X] Links to external sites, e.g. GitHub and LinkedIn.
    To provide easy access to my professional network and external contributions, I included links to GitHub, LinkedIn, and other relevant sites. Links open in new tabs (target="blank") allowing users to remain on the portfolio while exploring external content.
- [X] Acknowledgement
    I added an acknowledgement section at the beginning of the homepage to provide a moment for reflection for the user before they dive into the rest of the site.
​
### Technical
 Below is a summary of the technical features of the portfolio site and the design decisions made:
- [X] At least 2 web pages.
    The site includes multiple pages: index.html (Home), about.html, and projects.html. Internal navigation links are provided to the sections like 'About me', 'My skills', 'My tech projects' and 'Get in touch', ensuring smooth user experience.
- [X] Version controlled with Git
    All project development was version-controlled using Git. I worked primarily on a dedicated development branch, with frequent commits to track progress. The final version was pushed to the main branch for deployment.
- [X] Deployed on GitHub pages.
    The project was successfully deployed on GitHub pages at: https://ginahorch.github.io/ GitHub Pages was chosen due to its ease of use for hosting static sites and its integration with Git repositories.
- [X] Implements responsive design principles.
    The site currently incorporates some responsive design elements using media queries, allowing for basic scaling across different screen sizes. All images and media are responsive by using max-width: 100% to prevent overflow and maintain aspect ratios. The site adopts a mobile-first approach, with a design optimised for small screens and progressively enhanced for larger screens. Fluid Grids are used, meaning relative units, such as percentages and rem, to ensure flexible design that scales smoothly across devices. Breakpoints by using media queries ensure seamless user experience on desktops, tablets, and mobile devices. For further optimisation, images have been compressed and CSS and JavaScript files minimised to improve load times on mobile devices.
- [X] Uses semantic HTML.
    Semantic HTML tags such as `<header>`, `<article>`, `<form>`, `<main>`, `<nav>`, `<section>` and `<footer>` were used throughout the project. These tags enhance accessibility and ensure the website adheres to best practices in HTML structure.

### Bonus (optional)
 In additional to the required feartures, I aimed to include advanced styling and interactions to improve user experience. Below is a summary of the extra features and what I plan to include in the future. 
- [X] Different styles for active, hover and focus states.
    I implemented custom styles for hover and focus states, adding visual feedback when users interact with links, buttons, and other interactive elements. For example:
    **Hover effects:** Subtle colour transitions and transformations were applied to buttons and links to enhance the interactive feel. I used CSS transitions to ensure smooth animations.
    **Focus states:** Custom focus outlines were designed to ensure accessibility for keyboard users, improving navigation for people with disabilities. Colour choices and contrasts have been refined to meet WCAG accessibility standards.
- [X] Include JavaScript to add some dynamic elements to your site. (Extra tricky!)
    To further enhance the portfolio, I implemented JavaScript-driven dynamic elements:
    **Interactive Modals:** I added interactive modals for project previews, allowing users to click on a project and view additional information without leaving the page.
    **Scroll-triggered animations:** I used libraries like **ScrollReveal.js** to animate elements into view as users scroll down the page, adding a touch of modern flair and engagement.
    **Smooth scrolling and lazy loading:** I implemented smooth scrolling for anchor links and lazy loading for images to improve performance, especially for mobile devices.
    These enhancements make the site more engaging and align with the expectations of modern web users, showcasing advanced frontend development skills. 
​
### Screenshots
> Please include the following:
> - The different pages and features of your website on mobile, tablet and desktop screen sizes (multiple screenshots per page and screen size).
    
> - The different features of your site, e.g. if you have hover states, take a screenshot that shows that.  
     
> You can do this by saving the images in a folder in your repo, and including them in your readme document with the following Markdown code: 

The screenshots reflect my skills straight after completing the HTML and CSS component of SheCodesPlus.

####  screenshot-home-page-desktop 
![Image of the home page, desktop screen size](/screen-shots/screenshot-home-page-desktop.png)

####  screenshot-home-page-hamburger-menu 
![Image of the home page, desktop screen size, open hamburger menu](/screen-shots/screenshot-home-page-hamburger-menu.png)

####  screenshot-home-page-450px1
![Image of the home page, mobile device, first part including header](/screen-shots/screenshot-home-page450px1.png)

####  screenshot-home-page-450px2
![Image of the home page, mobile device, second part including skills](/screen-shots/screenshot-home-page450px2.png)

####  screenshot-home-page-450px3
![Image of the home page, mobile device, third part including footer](/screen-shots/screenshot-home-page450px3.png)

####  screenshot-home-page-700px1
![Image of the home page, tablet device, first part including header](/screen-shots/screenshot-home-page700px1.png)

####  screenshot-home-page-700px2
![Image of the home page, tablet device, first part including skills](/screen-shots/screenshot-home-page700px2.png)

####  screenshot-home-page-700px3
![Image of the home page, tablet device, first part including footer](/screen-shots/screenshot-home-page700px3.png)

####  screenshot-form-submission
![Image of the successful form submission](/screen-shots/screenshot-form-submission.png)