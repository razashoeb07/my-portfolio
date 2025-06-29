
# Portfolio Résumé Template

A sleek, fully-responsive portfolio template that can be used as a web résumé. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![image](https://github.com/user-attachments/assets/b5b6c34d-b173-4393-8bac-173796f0c7f4)
![image](https://github.com/user-attachments/assets/6fa784c4-ad15-4224-a639-642b8082cff1)
![image](https://github.com/user-attachments/assets/8bd50835-0fe9-4c12-b921-13a325014821)
![image](https://github.com/user-attachments/assets/9c18547e-8e34-4112-bb42-1343ed97feeb)
![image](https://github.com/user-attachments/assets/50d229f4-abb6-41d7-854e-0dc04d3ae39a)


## ✨ Features

- **Single Page Layout**: Smooth scroll navigation via anchor links
- **Responsive Design**: Works on all device sizes
- **Theme Toggle**: Switch between light and dark mode
- **Data-Driven**: All content stored in a single data file
- **Animations**: Subtle animations with Framer Motion
- **A11y Support**: Accessible design with semantic HTML and keyboard navigation
- **Print-Ready**: "Download PDF" functionality for résumé printing

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:8080](http://localhost:8080) to see your portfolio!

## 📝 Editing Your Portfolio

All content is stored in a single data file: `/src/data/profile.ts`

To update your portfolio, simply edit this file. The changes will be automatically reflected throughout your site.

### Data Structure

The profile data structure includes:

- **basics**: Your personal information (name, title, contact info, etc.)
- **skills**: Technical and other skills, grouped by category
- **experience**: Work experience with job details
- **projects**: Portfolio projects with images and links
- **education**: Educational background
- **certifications**: Professional certifications
- **achievements**: Notable accomplishments
- **volunteering**: Volunteer work
- **meta**: SEO and metadata information

## 🖨️ Printing as PDF

To generate a PDF version of your résumé:

1. Click the "Download PDF" button on the site
2. When the print dialog opens, select "Save as PDF" option
3. Adjust margins if needed (recommended: None)
4. Save the file

## 🌐 Deployment

### Deploy to Vercel

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the repository
4. Deploy!

```sh
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Import the repository with these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

```sh
npm install -g netlify-cli
netlify deploy
```

## 🛠️ Customization

### Changing Colors

Edit the CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --primary: 221 83% 53%;
  --accent: 176 68% 64%;
  /* other colors... */
}
```

### Adding New Sections

1. Create a new component in `/src/sections/`
2. Add the corresponding data in `/src/data/profile.ts`
3. Import and add the component to `App.tsx`

## 📚 Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) - Frontend
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [React Query](https://tanstack.com/query/latest) - Data fetching
