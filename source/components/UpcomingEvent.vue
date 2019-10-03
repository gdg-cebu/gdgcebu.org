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
    display: flex;

    padding: 4rem;
    background-color: #fafafa;
}

img {
    display: block;
    max-width: 52rem;
    margin-right: 5rem;
}

.details {
    margin-top: 3rem;
}

.details h2 {
    margin-bottom: 2.4rem;

    font-size: 2.4rem;
    color: var(--primary-text-color);
}

.details p {
    max-width: 45rem;
}

.details ul {
    margin-top: 3.2rem;
}

.details li {
    margin: 8px 0;

    font-size: 1.6rem;
    color: var(--primary-text-color);
}
</style>
