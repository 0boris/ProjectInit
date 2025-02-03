<p align="center">
  <a href="https://projectinit.0boris.xyz" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://github.com/0boris/projectinit/blob/main/assets/ProjectInit.png" alt="ProjectInit Logo">
  </a>
  
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/projectinit"><img src="https://img.shields.io/npm/v/projectinit-kit.svg" alt="npm package"></a><br/>
</p>
<br/>

# ProjectInit 🎈
> Scaffold a new project, without all the unnecessary clutter other tools give.

- 🎨 Variety of starters
- ⚡ Ready in 15 seconds
- 💡 Easy to Use
- 🔧 One tool for everything

<p align="justify">
  The purpose of this is to quickly and easily scaffold projects on Node.js without clutter and unnecessary files that usually other create-* tools contain. For example:
</p>

- <a href="https://vite.new/">create-vite</a>: React and Vite SVGs, 2 different CSS files, and a README.md
- <a href="https://create-react-app.dev/">create-react-app</a>: reportWebVitals.js, setupTests.js, App.test.js, again 2 different CSS files, and a README.md
- <a href="https://www.npmjs.com/package/create-vue">create-vue</a>: 5 icons, HelloWorld.vue, TheWelcome.vue, WelcomeItem.vue, a logo.svg, 2 CSS files, and a README.md
  
_These are made to showcase the possibilities with whatever they have, and whatever may be helpful to developers. If you find these pre-made things useful, then use them._


## Usage 🔨

**ProjectInit is very easy to use. To begin, install the package with your favourite package manager:**

```
npm install -g projectinit-kit
```

Once the installation completes, it's as simple as running one command:

```
init
```

Then, the interactive installer will walk you through the scaffolding of whatever app you choose.


> [!IMPORTANT]
> The package comes with all of the templates by default. This means the package size can get quite big (depending on how many templates are added). *A network-based projectinit may be created if the bundle size becomes too big.*

## What comes out of the box? 📦
 
| Frontend                                              | Backend                                              |
| :---------------------------------------------------- | :--------------------------------------------------- |
| TailwindCSS                                           | ONE simple '/' route to display some plain text      |
| TypeScript and JavaScript support                     | TypeScript and JavaScript support                    |

## What is included? 🗃️
| Frontend                                              | Backend                                              | Full-Stack                                            |
| ----------------------------------------------------- | ---------------------------------------------------  | :---------------------------------------------------  |
| React                                                 | Express                                              | NextJS                                                |
| Vue                                                   | (more coming soon!)                                  | Nuxt
| Svelte                                                | (more coming soon!)                                  | (more coming soon!)


## Roadmap 🛣️

- ✅ Automatic dependency installation
- ✅ Automatic server start after completion
- ❌ Gateway to each project's respective installer if the user wants more customization
- ❌ Wider range of templates - at least 20
- ❌ Network-based installation