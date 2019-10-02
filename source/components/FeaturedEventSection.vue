<template>
    <section>
        <div class="content">
            <h1>Featured event</h1>

            <article>
                <h2>GDG DevFest Cebu 2019</h2>
                <p>DevFest 2019 brings together world-class experts in Android, Web, and Cloud technologies  for a day of sessions, workshops, and showcases.</p>

                <div class="details">
                    <ul>
                        <li>November 16, 2019</li>
                        <li>J Centre Mall, Mandaue City</li>
                    </ul>

                    <a href="#">
                        <img src="~images/arrow.svg" alt="">
                        Learn more
                    </a>
                </div>
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
    text-align: center;
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

.details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: -3.2rem;
}

.details > * {
    margin-bottom: 3.2rem;
}

.details ul {
    margin-right: 3.2rem;
}

.details a {
    display: inline-flex;
    align-items: center;
    padding: 0 2.4rem;
    margin-left: auto;

    line-height: 4rem;
    color: var(--primary-text-color);
    background-color: var(--gdg-yellow);
}

.details img {
    width: 2rem;
    margin-right: 1.8rem;
}

.image {
    margin: 0 -3.2rem;
}

.image img {
    display: block;
    width: 100%;
}

@media (min-width: 576px) {
    section {
        padding: 5rem;
        padding-top: 0;
    }

    .content {
        padding: 0 6rem;
        padding-bottom: 3.2rem;
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 3rem;
        text-align: left;
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

    .details li {
        margin-bottom: 8px;
        font-size: 1.6rem;
    }

    .details a {
        line-height: 4.8rem;
    }

    .details img {
        width: 2.4rem;
    }

    .image {
        margin: 0;
        position: relative;
    }

    .image::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        transform: translate(-3.2rem, 3.2rem);

        background: url("~images/dot.svg") repeat;
    }
}

@media (min-width: 730px) {
    section {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;

        max-width: 145rem;
        margin: 0 auto;
    }

    .content {
        flex: 1;
        min-width: 45rem;
        max-width: 55rem;

        margin-right: 10rem;
    }

    .details a {
        margin-right: -11rem;
    }

    .image {
        flex: 1;
        min-width: 40rem;
        max-width: 62rem;
        margin-left: auto;
    }

    .image::before {
        transform: translate(-5rem, 5rem);
    }
}
</style>
