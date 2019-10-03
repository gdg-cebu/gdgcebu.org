<template>
    <main class="wrapper">
        <section class="upcoming-events">
            <h1>Upcoming Events</h1>

            <div>
                <UpcomingEvent
                    v-for="event in upcomingEvents"
                    :key="event.title"
                    :data="event"
                />
            </div>
        </section>

        <section class="past-events">
            <h1>Past Events</h1>

            <div v-for="event in pastEvents">
                {{event}}
            </div>
        </section>
    </main>
</template>

<script>
import {mapGetters} from 'vuex';
import UpcomingEvent from '@/components/UpcomingEvent.vue';

export default {
    name: 'Events',

    components: {
        UpcomingEvent
    },

    computed: mapGetters(['upcomingEvents', 'pastEvents'])
};
</script>

<style scoped>
main {
    padding: 0 3.2rem;
}

h1 {
    max-width: 45rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

.upcoming-events div {
    margin: 0 -4rem;
}

.past-events {
    margin-top: 5rem;
}

@media (min-width: 576px) {
    h1 {
        padding-top: 5rem;
        padding-bottom: 6rem;

        font-size: 3rem;
    }
}

@media (min-width: 730px) {
    main {
        padding: 0 10rem;
    }
}
</style>
