<template>
    <div>
        <TheHeader />
        <router-view></router-view>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
    name: 'App',

    components: {
        TheHeader,
        TheFooter
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Google+Sans&display=swap");

:root {
    --gdg-blue: #4384f4;
    --gdg-yellow: #ffc107;
    --primary-text-color: #444;
    --secondary-text-color: #777;
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
    font-size: 1.6rem;
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

.wrapper {
    max-width: 145rem;
    margin: 0 auto;
}

@media (min-width: 576px) {
    body {
        font-size: 1.8rem;
    }
}
</style>
