<template>
    <div class="upcoming-event">
        <div class="wrapper">
            <div class="content left-content">
                <div class="image-placeholder"></div>
            </div>
            <div class="content right-content">
                <p class="title">Upcoming Event</p>
                <h1>
                    Mobile Sites Certification Study Jam: <br>
                    University of the Philippines Cebu
                </h1>

                <p class="detail date">March 14, 2018 1:00-5:30 PM</p>
                <p class="detail venue">RM 302-306, UP Cebu</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .upcoming-event {
        padding: 7rem 0;
        background-color: #0f9d58;
    }

    .wrapper {
        display: flex;
    }

    .content {
        flex-shrink: 0;
        width: 50%;
    }

    .left-content {
        padding-left: 10rem;
        padding-right: 2.1rem;
    }

    .right-content {
        padding-left: 2.1rem;
        padding-right: 10rem;
    }

    .image-placeholder {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .image-placeholder::before {
        content: "";
        display: block;
        padding-top: calc(100% / 16 * 9);
    }

    p, h1 {
        margin: 0;
    }

    .title {
        margin-bottom: 1.6rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.75);
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 2.4rem;
        font-weight: 500;
        color: #fff;
    }

    .detail {
        color: rgba(255, 255, 255, 0.75);
    }
</style>
