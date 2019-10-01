<template>
    <div>
        <TheHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
    name: 'App',

    components: {
        TheHeader
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Google+Sans&display=swap");

:root {
    --primary-text-color: #222;
    --secondary-text-color: #555;
    --gray: rgba(27, 31, 35, 0.05);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    font-family: "Google Sans", sans-serif;
    font-size: 1.8rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.4;
    color: var(--secondary-text-color);
}

a {
    font: inherit;
    color: inherit;
    text-decoration: none;
}
</style>
