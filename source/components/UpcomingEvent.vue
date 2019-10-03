<template>
    <article>
        <img :src="data.image" :alt="data.title">

        <div class="details">
            <h2>{{data.title}}</h2>
            <p>{{data.description}}</p>

            <ul>
                <li>{{eventDate}}</li>
                <li>{{data.venue}}</li>
            </ul>
        </div>
    </article>
</template>

<script>
import dayjs from 'dayjs';

export default {
    name: 'UpcomingEvent',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    computed: {
        eventDate() {
            return dayjs(this.data.date).format('MMMM D, YYYY');
        }
    }
};
</script>

<style scoped>
article {
    padding: 4rem;
    background-color: #fafafa;
}

img {
    display: block;
    width: 100%;
    margin-right: 5rem;
}

.details {
    margin-top: 3rem;
}

.details h2 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

.details p {
    max-width: 45rem;
}

.details ul {
    margin-top: 3.2rem;
}

.details li {
    font-size: 1.6rem;
    color: var(--primary-text-color);
}

@media (min-width: 576px) {
    .details h2 {
        margin-bottom: 2.4rem;
        font-size: 2.4rem;
    }

    .details li {
        margin: 8px 0;
    }
}

@media (min-width: 730px) {
    article {
        display: flex;
    }

    img {
        max-width: 52rem;
    }
}
</style>
