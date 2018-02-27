<template>
    <div class="about-us">
        <div class="wrapper">
            <div class="content left-content">
                <img src="~images/gdg-logo.png" alt="GDG Logo">
            </div>
            <div class="content right-content">
                <h1>About us</h1>

                <p>
                    Google Developers Group (GDG) Cebu is a non-profit group of amateurs and professionals
                    (technology users, specialists, and developers) who are independent from Google but are
                    enthusiasts and daily users of Google technologies. Members meet and socialize on a
                    regular basis.
                </p>

                <p>
                    GDG Cebu is an independent group; the activities and opinions expressed by the group
                    should in no way be linked to Google, the corporation.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-us {
        padding: 7rem 0;
        position: relative;
        color: #fff;
    }

    .about-us::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: url("~images/about-us-bg.png") center center no-repeat;
        filter: brightness(0.2);
    }

    .wrapper {
        display: flex;
    }

    .content {
        flex: 1 0 0;
    }

    .left-content {
        padding-top: 2rem;
        padding-right: 2.1rem;
        text-align: right;
    }

    .right-content {
        padding-left: 2.1rem;
        padding-right: 10rem;
    }

    h1 {
        margin: 0;
        font-size: 2.4rem;
        font-weight: 500;
    }
</style>
