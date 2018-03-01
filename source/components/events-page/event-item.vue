<template>
    <article class="event-item">
        <img :src="data.image" :alt="data.title">

        <div class="content">
            <h2>{{ data.title }}</h2>
            <div class="details">
                <p class="detail date">{{ data.date }}</p>
                <p class="detail venue">{{ data.venue }}</p>
            </div>

            <p>{{ data.description }}</p>
        </div>
    </article>
</template>

<script>
    export default {
        props: ['data']
    };
</script>

<style scoped>
    .event-item {
        display: flex;
        padding: 2.4rem;
    }

    img {
        flex-shrink: 0;
        width: 16rem;
        height: 9rem;
        margin-right: 2.4rem;
        object-fit: contain;
        object-position: center center;
    }

    h2 {
        margin: 0;
        margin-bottom: 0.8rem;
        font-size: 1.8rem;
        color: #333;
    }

    p {
        margin: 0;
    }

    .details {
        display: flex;
        margin-bottom: 2.4rem;
        color: rgba(128, 128, 128, 0.75);
    }

    .detail:not(:last-child) {
        margin-right: 2.4rem;
    }

    @media (max-width: 500px) {
        .event-item {
            flex-wrap: wrap;
            justify-content: center
        }

        img {
            margin-bottom: 2.4rem;
        }
    }
</style>
