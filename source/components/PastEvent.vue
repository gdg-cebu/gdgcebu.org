<template>
    <article>
        <img :src="data.image" :alt="data.title">

        <div class="details">
            <h2>{{data.title}}</h2>

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
    name: 'PastEvent',

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
img {
    display: block;
    width: 100%;
}

.details {
    padding: 3.2rem 2.4rem 8rem 2.4rem;
}

.details h2 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

.details li {
    font-size: 1.6rem;
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
</style>
