<template>
    <div class="what-we-do">
        <div class="wrapper">
            <h1>What we do</h1>

            <ul>
                <li>
                    <div class="icon-placeholder"></div>
                    <h2>Talks</h2>
                    <p>Get updated with the latest news and announcements</p>
                </li>
                <li>
                    <div class="icon-placeholder"></div>
                    <h2>Codelabs</h2>
                    <p>Get hands-on activity and mentors to guide you</p>
                </li>
                <li>
                    <div class="icon-placeholder"></div>
                    <h2>Roadshows</h2>
                    <p>Share knowledge in different colleges and universities</p>
                </li>
                <li>
                    <div class="icon-placeholder"></div>
                    <h2>Live Viewing Parties</h2>
                    <p>Watch a live Google event happening in different countries</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .what-we-do {
        padding: 7rem 0;
    }

    h1 {
        margin: 0;
        margin-bottom: 5rem;
        font-size: 2.4rem;
        font-weight: 500;
        text-align: center;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        flex: 1 0 0;
        min-width: 28rem;
        margin: 0 0.6rem;
        text-align: center;
    }

    .icon-placeholder {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: auto;
        background-color: #eee;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    p {
        color: #888;
    }

    @media (max-width: 800px) {
        li {
            margin-top: 1.2rem;
            margin-bottom: 1.2rem;
        }
    }
</style>
