<template>
    <section>
        <img src="~images/illustration.svg" alt="" loading="lazy" width="300" height="264">

        <div>
            <h1>What we do</h1>

            <ul>
                <li>
                    <h2>Talks</h2>
                    <p>Get updated with the latest news and announcements</p>
                </li>
                <li>
                    <h2>Codelabs</h2>
                    <p>Get hands-on activity and mentors to guide you</p>
                </li>
                <li>
                    <h2>Roadshows</h2>
                    <p>Get hands-on activity and mentors to guide you</p>
                </li>
                <li>
                    <h2>Live Viewing Parties</h2>
                    <p>Watch a live Google event happening in different countries</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WhatWeDoSection'
};
</script>

<style scoped>
section {
    padding: 3.2rem;
}

img {
    display: block;

    width: 100%;
    max-width: 20rem;
    margin: 0 auto 6.4rem auto;
}

h1 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    text-align: center;
    color: var(--primary-text-color);
}

ul {
    padding: 0;
    margin: 0;

    list-style: none;
}

li {
    margin: 1.8rem 0;
}

li:last-child {
    margin-bottom: 0;
}

li h2 {
    margin-bottom: 4px;

    font-size: 1.8rem;
    color: var(--primary-text-color);
}

@media (min-width: 576px) {
    section {
        padding: 5rem;
    }

    img {
        margin-bottom: 0;
    }

    div {
        padding: 6rem;
        padding-top: 5rem;
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 3rem;
        text-align: left;
    }

    li {
        margin: 4rem 0;
    }

    li h2 {
        margin-bottom: 8px;
    }
}

@media (min-width: 730px) {
    section {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        padding: 10rem 5rem 15rem 5rem;
    }

    img {
        width: 30%;
        max-width: 30rem;

        margin: 0;
        margin-top: 9rem;
    }

    div {
        padding: 0;
        margin-left: 5rem;
    }
}

@media (min-width: 992px) {
    div {
        margin-left: 12rem;
    }
}
</style>
