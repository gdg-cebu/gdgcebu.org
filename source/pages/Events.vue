<template>
    <main class="wrapper">
        <h1>Upcoming Events</h1>

        <div v-for="event in upcomingEvents">
            {{event}}
        </div>

        <h1>Past Events</h1>

        <div v-for="event in pastEvents">
            {{event}}
        </div>
    </main>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Events',

    computed: mapGetters(['upcomingEvents', 'pastEvents'])
};
</script>

<style scoped>
main {
    padding: 0 3.2rem;
}

h1 {
    max-width: 45rem;
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

@media (min-width: 576px) {
    h1 {
        padding-top: 5rem;
        padding-bottom: 6rem;
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
