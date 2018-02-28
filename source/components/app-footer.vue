<template>
    <footer class="app-footer">
        <div class="wrapper">
            <ul>
                <li><p>GDG Cebu</p></li>
                <li><router-link :to="{ name: 'landing-page' }">About</router-link></li>
                <li><router-link :to="{ name: 'landing-page' }">Events</router-link></li>
                <li><router-link :to="{ name: 'landing-page' }">Team</router-link></li>
                <li><router-link :to="{ name: 'landing-page' }">Code of Conduct</router-link></li>
                <li><router-link :to="{ name: 'landing-page' }">Google Developers Page</router-link></li>
            </ul>

            <ul>
                <li><p>Get Involved</p></li>
                <li><a href="#">Become a Sponsor</a></li>
                <li><a href="#">Join our Facebook Group</a></li>
                <li><a href="#">Like our Facebook Page</a></li>
            </ul>

            <ul>
                <li><p>Resources</p></li>
                <li><a href="#">Media Kit</a></li>
                <li><a href="#">Photo Gallery</a></li>
            </ul>

            <ul>
                <li><p>Contact Us</p></li>
                <li><a href="mailto:contact@gdgcebu.org">Send us an email</a></li>
                <li><p class="dimmed">Follow our social media accounts:</p></li>
                <li class="social-links">
                    <a href="#" class="social-link google-plus"></a>
                    <a href="#" class="social-link facebook"></a>
                    <a href="#" class="social-link twitter"></a>
                    <a href="#" class="social-link instagram"></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
    .app-footer {
        padding: 4rem 0;
        font-size: 1.4rem;
        color: #fff;
        background-color: #303c42;
    }

    .wrapper {
        display: flex;
    }

    ul {
        flex: 1 0 0;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    ul:not(:first-child) {
        margin-left: 0.6rem;
    }

    ul:not(:last-child) {
        margin-right: 0.6rem;
    }

    p {
        margin: 0;
        margin-bottom: 1.2rem;
        font-weight: 500;
    }

    a {
        display: inline-block;
        margin: 0.4rem 0;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.8);
    }

    a:hover,
    a:focus {
        text-decoration: underline;
    }

    .dimmed {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
    }

    .social-links {
        display: flex;
        margin-top: 1.6rem;
    }

    .social-link {
        width: 2.4rem;
        height: 2.4rem;
    }

    .social-link:not(:last-child) {
        margin-right: 1.6rem;
        background: center center no-repeat;
        background-size: contain;
        opacity: 0.8;
        transition: opacity 250ms ease;
    }

    .social-link:hover,
    .social-link:focus {
        opacity: 1;
    }

    .social-link.google-plus {
        background-image: url("~images/google-plus.png");
    }

    .social-link.facebook {
        background-image: url("~images/facebook.png");
    }

    .social-link.twitter {
        background-image: url("~images/twitter.png");
    }

    .social-link.instagram {
        background-image: url("~images/instagram.png");
    }
</style>
