<template>
    <article class="event-item">
        <div class="image-placeholder"></div>

        <div class="content">
            <h2>Mobile Sites Certification: University of the Philippines Cebu</h2>
            <div class="details">
                <p class="detail date">March 14, 2018</p>
                <p class="detail venue">UP Cebu</p>
            </div>

            <p>GDG Cebu's biggest event yet. The event will focus on essential technical topics for developers, along with updates on the current development trends. The topics will range from Machine Learning, Firebase, and the Cloud, to Material Design, Android, and 2017's Web Trends. Attendees will be learning about these topics from Googlers themselves, who will be flying in from South Korea, Japan, Singapore and the US.</p>
        </div>
    </article>
</template>

<style scoped>
    .event-item {
        display: flex;
        padding: 2.4rem;
    }

    .image-placeholder {
        flex-shrink: 0;
        width: 16rem;
        height: 9rem;
        margin-right: 2.4rem;
        background-color: #eee;
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
</style>
