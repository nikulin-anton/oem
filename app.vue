<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: Quicksand;
  src: url(./assets/fonts/quicksand.ttf);
}

:root {
  --text-primary: #000;
  --text-secondary: #616c76;
  --text-white: #fff;
  --bg-block-primary: #fff;
  --bg-block-secondary: #f8f9fa;
  --bg-block-3: #8fa0af;
  --bg-block-tertiary: #eef1f4;
  --system-success: #157b2f;
  --system-info: #0086ea;
  --system-info-light: rgba(0, 133, 234, 0.16);
  --border-primary: #cdd5de;
  --interactive-gray-hover: #f8f9fa;
  --disabled-border: #d4d4d4;
  --disabled-primary: #9e9e9e;

  --max-width: 1100px;
  --font-family: Quicksand, sans-serif;
  --margin: 24px;

  --foreground: var(--text-primary);
  --background: var(--bg-block-primary);
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #eef1f4;
    --text-secondary: #abbbc9;
    --text-white: #0e1114;
    --bg-block-primary: #21262b;
    --bg-block-secondary: #353c43;
    --system-info: #0d6cbd;
    --border-primary: #4a545c;
    --interactive-gray-hover: #353c43;
    --bg-block-tertiary: #4a545c;
    --disabled-border: #3b3b3b;
    --disabled-primary: #6a6a6a;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  font-family: var(--font-family);
  font-weight: 500;
  background: var(--background);
}

body {
  color: var(--foreground);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
</style>
