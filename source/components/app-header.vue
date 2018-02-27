<template>
    <header class="app-header">
        <div class="wrapper">
            <router-link :to="{ name: 'landing-page' }" class="app-logo">
                <img src="~images/gdg-logo.png" alt="GDG Logo">
            </router-link>

            <nav>
                <router-link :to="{ name: 'landing-page' }">About</router-link>
                <router-link :to="{ name: 'landing-page' }">Events</router-link>
                <router-link :to="{ name: 'landing-page' }">Team</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    .app-header {
        height: 5.6rem;
        border-bottom: 1px solid #ddd;
    }

    .wrapper {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .app-logo {
        margin-right: 7rem;
    }

    nav {
        font-size: 0;
    }

    nav a {
        display: inline-block;
        padding: 0 2.4rem;
        font-size: 1.5rem;
        text-decoration: none;
    }
</style>
