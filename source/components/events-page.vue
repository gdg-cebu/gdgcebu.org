<template>
    <div class="events-page">
        <div class="wrapper">
            <div class="page-header">
                <h1>Our Events</h1>
            </div>

            <div class="events">
                <event-item v-for="(event, i) in events" :key="i" :data="event"></event-item>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState(['events']),

        components: {
            'event-item': require('./events-page/event-item.vue').default
        }
    };
</script>

<style scoped>
    .events-page {
        padding-bottom: 20rem;
    }

    .page-header {
        padding: 7rem 0;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 500;
    }

    .event-item:not(:first-child) {
        margin-top: 3.6rem;
    }

    .event-item:not(:last-child) {
        margin-bottom: 3.6rem;
    }
</style>
