<template>
    <div class="upcoming-event">
        <div class="wrapper">
            <div class="content left-content">
                <div class="image-container">
                    <img :src="upcomingEvent.image" :alt="upcomingEvent.title">
                </div>
            </div>
            <div class="content right-content">
                <p class="title">Upcoming Event</p>
                <h1>{{ upcomingEvent.title }}</h1>

                <p class="detail date">{{ upcomingEvent.date }}</p>
                <p class="detail venue">{{ upcomingEvent.venue }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState(['upcomingEvent'])
    };
</script>

<style scoped>
    .upcoming-event {
        padding: 7rem 0;
        background-color: #0f9d58;
    }

    .wrapper {
        display: flex;
    }

    .content {
        flex-shrink: 0;
        width: 50%;
    }

    .left-content {
        padding-left: 10rem;
        padding-right: 2.1rem;
    }

    .right-content {
        padding-left: 2.1rem;
        padding-right: 10rem;
    }

    .image-container {
        width: 100%;
        position: relative;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .image-container::before {
        content: "";
        display: block;
        padding-top: calc(100% / 16 * 9);
    }

    .image-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    p, h1 {
        margin: 0;
    }

    .title {
        margin-bottom: 1.6rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.75);
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 2.4rem;
        font-weight: 500;
        color: #fff;
    }

    .detail {
        color: rgba(255, 255, 255, 0.75);
    }
</style>
