<template>
    <header>
        <img src="~images/gdgcebu-logo.png" alt="GDG Cebu Logo">

        <nav>
            <router-link to="/">Home</router-link></a>
            <router-link to="/events/">Events</router-link></a>
            <router-link to="/team/">Team</router-link></a>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.8rem 10rem;
}

img {
    display: block;
    max-height: 6.4rem;
}

a {
    display: inline-block;
    padding: 0 2.4rem;
    font-size: 1.4rem;
    line-height: 4rem;

    color: var(--primary-text-color);
    border-radius: 4px;
}

a.router-link-exact-active {
    background-color: var(--gray);
}
</style>
