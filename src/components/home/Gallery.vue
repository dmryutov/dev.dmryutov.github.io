<template>
    <div class="bevel_after">
        <div id="gallery">
            <div class="container">
                <h3>ПОРТФОЛИО</h3>

                <stack
                    class="image-grid"
                    :column-min-width="300"
                    :gutter-width="12"
                    :gutter-height="12"
                    monitor-images-loaded
                >
                    <stack-item v-for="(item, i) in projects" :key="i">
                        <router-link :to="{name: 'project_detail', params: {id: item.id}}">
                            <img
                                :src="require(`@/assets/project/thumb/${item.id}.jpg`)"
                                :alt="item.name"
                            >
                            <div class="info">
                                <h5>{{ item.name }}</h5>
                            </div>
                        </router-link>
                    </stack-item>
                </stack>

                <button
                    v-if="projects.length < PROJECTS.length"
                    class="btn btn-outline-light my-3"
                    @click="showGroups++"
                >
                    Больше
                </button>

                <a v-scroll-to="'#reviews'" href="#" class="arrow">
                    <img src="@/assets/common/arrow-down-light.png" alt="arrow-down">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {Stack, StackItem} from 'vue-stack-grid';

import {PROJECTS} from '@/consts/project';

/**
 * Projects gallery component
 */
export default {
    name: 'Gallery',
    components: {
        Stack,
        StackItem,
    },
    data() {
        return {
            PROJECTS,
            showGroups: 1,
        };
    },
    computed: {
        projects() {
            return PROJECTS.slice(0, this.showGroups * 6);
        },
    },
    methods: {
    },
};
</script>

<style lang="scss">
    #gallery {
        padding: 20px 0 50px;
        text-align: center;
        background: #181b1e;

        h3 {
            color: #fff;
        }

        .info {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(100% - 60px);
            height: calc(100% - 60px);
            margin: 30px;
            padding: 10px;
            color: #fff;
            background: rgba(210, 89, 80, 0.88);
            opacity: 0;
            transition: 0.3s all;

            h5 {
                margin: 0;
                font-weight: 400;
                font-size: 24px;
            }
        }

        .image-grid {
            img {
                width: 100%;
                transition: 0.3s all;
            }

            a {
                display: block;
                border: 5px solid #fff;

                &:hover {
                    .info {
                        opacity: 1;
                    }

                    img {
                        opacity: 0.6;
                    }
                }
            }
        }
    }
</style>
