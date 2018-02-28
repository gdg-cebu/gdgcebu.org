<template>
    <header class="app-header">
        <div class="wrapper">
            <router-link :to="{ name: 'landing-page' }" class="app-logo">
                <img src="~images/gdgcebu-logo.png" alt="GDG Logo">
            </router-link>

            <nav>
                <router-link :to="{ name: 'landing-page' }">About</router-link>
                <router-link :to="{ name: 'events-page' }">Events</router-link>
                <router-link :to="{ name: 'team-page' }">Team</router-link>
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
        flex-wrap: wrap;
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
        padding: 1.6rem 2.4rem;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        font-size: 1.5rem;
        text-decoration: none;
        color: #888;
    }

    .router-link-exact-active {
        border-bottom-color: #888;
        color: #333;
    }

    @media (max-width: 513px) {
        .app-header {
            height: initial;
            padding-top: 2.4rem;
        }

        .wrapper {
            justify-content: center;
            align-items: initial;
        }

        .app-logo {
            margin-right: 0;
        }

        nav {
            width: 100%;
            text-align: center;
        }
    }
</style>
