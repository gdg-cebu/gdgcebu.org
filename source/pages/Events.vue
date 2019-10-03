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

            <div>
                <PastEvent
                    v-for="event in pastEvents"
                    :key="event.title"
                    :data="event"
                />
            </div>
        </section>
    </main>
</template>

<script>
import {mapGetters} from 'vuex';
import UpcomingEvent from '@/components/UpcomingEvent.vue';
import PastEvent from '@/components/PastEvent.vue';

export default {
    name: 'Events',

    components: {
        UpcomingEvent,
        PastEvent
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
    padding-top: 3rem;
    padding-bottom: 4rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

.upcoming-events div {
    margin: 0 -4rem;
}

.past-events {
    margin-top: 5rem;
}

.past-events div {
    display: grid;
    grid-template-columns: 1fr;
}

@media (min-width: 576px) {
    main {
        padding: 0 11rem;
    }

    h1 {
        padding-top: 5rem;
        padding-bottom: 6rem;

        font-size: 3rem;
    }
}

@media (min-width: 730px) {
    .past-events div {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5rem 12rem;
    }
}
</style>
