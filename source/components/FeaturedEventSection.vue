<template>
    <section>
        <div class="content">
            <h1>Featured event</h1>

            <article>
                <h2>GDG DevFest Cebu 2019</h2>
                <p>DevFest 2019 brings together world-class experts in Android, Web, and Cloud technologies  for a day of sessions, workshops, and showcases.</p>

                <ul>
                    <li>November 16, 2019</li>
                    <li>J Centre Mall, Mandaue City</li>
                </ul>

                <a href="#">Learn more</a>
            </article>
        </div>

        <div class="image">
            <img src="~images/devfest-banner.jpg" alt="GDG DevFest Cebu 2019">
        </div>
    </section>
</template>

<script>
export default {
    name: 'FeaturedEventSection'
};
</script>

<style scoped>
section {
    padding: 3.2rem;
}

h1 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

article {
    padding: 3.2rem;
    margin: 0 -3.2rem;

    color: #fff;
    background-color: var(--gdg-blue);
}

article h2 {
    margin-bottom: 1.8rem;
    font-size: 1.8rem;
}

article p {
    margin-bottom: 2.4rem;
}

article a {
    display: inline-block;
    padding: 0 2.4rem;
    margin-top: 2.4rem;

    line-height: 4rem;
    color: var(--primary-text-color);
    background-color: var(--gdg-yellow);
}

.image {
    display: none;
}

@media (min-width: 576px) {
    section {
        padding: 0 5rem;
    }

    .content {
        padding: 6rem;
        padding-top: 0;
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 3rem;
    }

    article {
        padding: 5rem 6rem;
        margin: 0 -6rem;
    }

    article h2 {
        margin-bottom: 2.4rem;
        font-size: 2.4rem;
    }

    article p {
        margin-bottom: 3.2rem;
    }

    article li {
        margin-bottom: 8px;
        font-size: 1.6rem;
    }

    article a {
        line-height: 4.8rem;
    }
}
</style>
