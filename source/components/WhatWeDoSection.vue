<template>
    <section>
        <img src="~images/illustration.svg" alt="">

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
    display: flex;
    align-items: flex-start;

    padding: 10rem 12rem;
}

img {
    flex-grow: 1;
    max-width: 30rem;

    margin-top: 9rem;
}

div {
    flex-shrink: 0;
    margin-left: 12rem;
}

h1 {
    margin-bottom: 5rem;

    font-size: 3rem;
    color: var(--primary-text-color);
}

ul {
    padding: 0;
    margin: 0;

    list-style: none;
}

li:not(:last-child) {
    margin-bottom: 4rem;
}

li h2 {
    margin-bottom: 8px;

    font-size: 2rem;
    color: var(--primary-text-color);
}
</style>
