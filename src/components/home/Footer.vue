<template>
    <div id="footer">
        <div class="container">
            <ul>
                <li>
                    <a :href="LINK_VK" target="_blank">
                        <i class="fab fa-vk" />
                    </a>
                </li>
                <li>
                    <a :href="LINK_INSTAGRAM" target="_blank">
                        <i class="fab fa-instagram" />
                    </a>
                </li>
                <li>
                    <a :href="LINK_FACEBOOK" target="_blank">
                        <i class="fab fa-facebook-f" />
                    </a>
                </li>
                <li>
                    <a :href="LINK_LINKEDIN" target="_blank">
                        <i class="fab fa-linkedin-in" />
                    </a>
                </li>
                <li>
                    <a :href="LINK_GITHUB" target="_blank">
                        <i class="fab fa-github" />
                    </a>
                </li>
                <li>
                    <a :href="'skype:' + LINK_SKYPE + '?call'">
                        <i class="fab fa-skype" />
                    </a>
                </li>
            </ul>
            <hr>
            <p>Created by dmryutov &copy; 2014 &mdash; {{ currentYear }}</p>
        </div>
    </div>
</template>

<script>
/**
 * App footer component
 */
import {
    LINK_FACEBOOK, LINK_GITHUB, LINK_INSTAGRAM, LINK_LINKEDIN, LINK_SKYPE, LINK_VK,
} from '@/consts/router';

export default {
    name: 'Footer',
    data() {
        return {
            LINK_FACEBOOK,
            LINK_GITHUB,
            LINK_INSTAGRAM,
            LINK_LINKEDIN,
            LINK_SKYPE,
            LINK_VK,
        };
    },
    computed: {
        /**
         * Get current year
         * @return {number} Current year
         */
        currentYear: () => new Date().getFullYear(),
    },
};
</script>

<style lang="scss">
    #footer {
        position: relative;
        padding: 25px 0;
        text-align: center;
        background: #181b1e;

        ul li {
            display: inline-block;
            padding: 0 15px;

            a {
                color: #bdbdbd;
                font-size: 26px;

                &:hover {
                    color: #f1453d;
                }
            }
        }

        hr {
            display: block;
            width: 110px;
            height: 6px;
            margin: 10px auto 20px;
            background: #f1453d;
        }

        p {
            margin: 0;
            color: #bdbdbd;
            font-size: 14px;
        }
    }
</style>
