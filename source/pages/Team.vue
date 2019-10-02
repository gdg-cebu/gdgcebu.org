<template>
    <main class="wrapper">
        <header>
            <h1>Team</h1>
            <p>These are the people that make all our awesome events possible, so we can all have a place to connect with other developers in our community.</p>
        </header>
    </main>
</template>

<script>
export default {
    name: 'Team'
};
</script>

<style scoped>
main {
    padding: 0 3.2rem;
}

h1 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

header {
    padding-top: 3rem;
    padding-bottom: 4rem;
}

@media (min-width: 576px) {
    header {
        max-width: 45rem;
        padding-top: 5rem;
        padding-bottom: 6rem;
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 3rem;
    }
}

@media (min-width: 730px) {
    main {
        padding: 0 10rem;
    }
}
</style>
