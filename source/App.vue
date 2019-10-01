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
    color: #555;
}
</style>
