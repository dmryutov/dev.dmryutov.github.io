<template>
    <div class="bevel_after">
        <div id="banner">
            <div class="container">
                <div id="header" class="d-flex">
                    <div class="logo">
                        <router-link :to="{name: HOME_PAGE}">
                            <img src="@/assets/common/logo.png" alt="logo">
                            <div class="logo_text">
                                <div class="name">
                                    Дмитрий Рютов
                                </div>
                                <div>ВЕБ&ndash;РАЗРАБОТЧИК</div>
                            </div>
                        </router-link>
                    </div>
                    <div class="menu ml-auto">
                        <span
                            class="mobile_menu d-lg-none"
                            @click="showMobileMenu = !showMobileMenu"
                        >
                            <i class="fa fa-bars" />
                        </span>
                        <transition name="fade">
                            <ul v-show="showMobileMenu" class="d-lg-block">
                                <li class="active">
                                    <router-link :to="{name: HOME_PAGE}">
                                        ГЛАВНАЯ
                                    </router-link>
                                </li>
                                <li>
                                    <a v-scroll-to="'#services'" href="#">УСЛУГИ</a>
                                </li>
                                <li>
                                    <a v-scroll-to="'#gallery'" href="#">ПОРТФОЛИО</a>
                                </li>
                                <li>
                                    <a v-scroll-to="'#reviews'" href="#">ОТЗЫВЫ</a>
                                </li>
                                <li>
                                    <a v-scroll-to="'#contact'" href="#">КОНТАКТЫ</a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                </div>
                <div class="text">
                    <h2>Привет!&nbsp;Я Дмитрий&nbsp;Рютов</h2>
                    <h3>Web &amp; Software Developer</h3>
                </div>
                <a
                    class="btn btn-danger download"
                    download="Дмитрий Рютов.pdf"
                    href="assets/resume.pdf"
                >
                    <i class="fa fa-download" /> Скачать резюме
                </a>
                <a v-scroll-to="'#services'" href="#" class="arrow">
                    <img src="@/assets/common/arrow-down-light.png" alt="arrow-down">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {HOME_PAGE} from '@/consts/router';


/**
 * App header component
 */
export default {
    name: 'HomeHeader',
    data() {
        return {
            HOME_PAGE,
            showMobileMenu: false,
        };
    },
};
</script>

<style lang="scss">
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins/_breakpoints';

    // Menu
    #header {
        margin-bottom: 110px;
    }

    .logo {
        margin-top: 4px;

        img {
            height: 50px;
        }

        .logo_text {
            display: inline-block;
            margin-left: 10px;
            color: #bdbdbd;
            font-size: 10px;
            letter-spacing: 1px;
            text-align: left;
            vertical-align: middle;
        }

        .name {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 0;
        }
    }

    .menu {
        ul li {
            display: inline-block;
            float: left;
            padding: 0 18px;

            a {
                display: block;
                padding: 18px 0 13px;
                color: #bdbdbd;
                font-weight: 400;
                font-size: 14px;
                text-decoration: none;
            }

            a:hover,
            &.active a {
                border-bottom: 7px solid #f44336;
            }
        }
    }

    // Banner
    #banner {
        position: relative;
        display: block;
        width: 100%;
        min-height: 550px;
        text-align: center;
        background: url(../../assets/common/banner.jpg) center no-repeat;
        background-size: cover;

        .text {
            margin-bottom: 60px;

            h2 {
                color: #fff;
                font-weight: 100;
                font-size: 56px;
                line-height: 67px;
            }

            h3 {
                margin: 0;
                color: #fff;
                font-weight: 100;
                font-size: 30px;
                line-height: 50px;
            }
        }

        .download {
            background: #f44336;

            &:hover {
                background: #9c2820;
            }
        }

        .arrow {
            position: absolute;
            bottom: 49px;
            left: 0;
            width: 100%;
        }
    }

    @include media-breakpoint-down(md) {
        .menu {
            ul {
                position: absolute;
                left: 15px;
                width: calc(100% - 30px);
                background: #f44336;

                li {
                    display: block;
                    float: none;
                    border-top: 1px solid black;

                    a,
                    &.active a {
                        padding: 14px 11px;
                        color: #fff;
                        border: none;
                    }

                    a:hover,
                    &.active {
                        border: none;
                    }

                    a:hover,
                    &.active:hover {
                        color: #b2b2b2;
                    }
                }
            }

            .mobile_menu {
                color: #fff;
                font-size: 28px;
                cursor: pointer;
            }
        }
    }

    @include media-breakpoint-down(sm) {
        #header {
            margin-bottom: 40px;
        }

        #banner {
            min-height: 440px;

            .text {
                width: 95%;
                margin: 0 auto 30px;

                h2 {
                    font-size: 42px;
                    line-height: 52px;
                }

                h3 {
                    font-size: 22px;
                }
            }
        }
    }

    // Menu animation
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.4s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
