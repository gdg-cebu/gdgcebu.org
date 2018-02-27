<template>
    <header class="app-header">
        <div class="wrapper">
            <router-link :to="{ name: 'landing-page' }">
                <img src="~images/gdg-logo.png" alt="GDG Logo">
            </router-link>
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
</style>
