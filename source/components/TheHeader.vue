<template>
    <header>
        <picture>
            <source media="(max-width: 575px)" srcset="~images/gdgcebu-logo.png">
            <source media="(min-width: 576px)" srcset="~images/gdgcebu-lockup.png">
            <img src="~images/gdgcebu-logo.png" alt="GDG Cebu Logo" loading="lazy" width="187" height="64">
        </picture>

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

    padding: 1.2rem 2.4rem;
}

img {
    display: block;
    max-height: 4rem;
}

a {
    display: inline-block;
    padding: 0 1.2rem;
    font-size: 1.4rem;
    line-height: 3.2rem;

    color: var(--primary-text-color);
    border-radius: 4px;
}

a.router-link-exact-active {
    background-color: var(--gray);
}

@media (min-width: 576px) {
    header {
        padding: 2.8rem;
    }

    img {
        max-height: 6.4rem;
    }

    a {
        padding: 0 2.4rem;
        line-height: 4rem;
    }
}

@media (min-width: 730px) {
    header {
        padding: 2.8rem 10rem;
    }
}
</style>
