<template>
    <router-view />
</template>

<style lang="scss">
    // Plugins
    @import '~@fortawesome/fontawesome-free/css/all.min.css';
    @import '~bootstrap/scss/bootstrap.scss';
    @import '~roboto-fontface/css/roboto/roboto-fontface.css';

    // Global
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #fff;

        a {
            transition: 0.4s all;
        }
    }

    h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>
