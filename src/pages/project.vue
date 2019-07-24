<template>
    <div class="bevel_after bevel_dark">
        <div id="project">
            <div class="container">
                <h3>{{ projectInstance.name }}</h3>
                <div class="row mt-4 mb-2">
                    <div class="col-12 col-lg-8">
                        <img
                            class="project-image"
                            :src="require(`@/assets/project/${projectInstance.id}.jpg`)"
                            :alt="projectInstance.name"
                        >
                    </div>
                    <div class="col-12 col-lg-4 info text-left">
                        <h5 class="my-3 mt-lg-0 text-center text-lg-left">
                            Информация о проекте
                        </h5>
                        <table class="table">
                            <tr>
                                <th scope="row">
                                    Название
                                </th>
                                <td>{{ projectInstance.name }}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Дата
                                </th>
                                <td>{{ projectInstance.date }}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Описание
                                </th>
                                <td>{{ projectInstance.description }}</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Платформа
                                </th>
                                <td>{{ projectInstance.platform }}</td>
                            </tr>
                            <tr v-if="projectInstance.stack.backend">
                                <th scope="row">
                                    Backend
                                </th>
                                <td><stack-group :items="projectInstance.stack.backend" /></td>
                            </tr>
                            <tr v-if="projectInstance.stack.frontend">
                                <th scope="row">
                                    Frontend
                                </th>
                                <td><stack-group :items="projectInstance.stack.frontend" /></td>
                            </tr>
                            <tr v-if="projectInstance.stack.db">
                                <th scope="row">
                                    БД
                                </th>
                                <td><stack-group :items="projectInstance.stack.db" /></td>
                            </tr>
                            <tr v-if="projectInstance.stack.other">
                                <th scope="row">
                                    Прочее
                                </th>
                                <td><stack-group :items="projectInstance.stack.other" /></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <router-link :to="{name: HOME_PAGE}" class="arrow">
                    <img src="@/assets/common/arrow-left.png" alt="arrow-left">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import StackGroup from '@/components/project/StackGroup';
import {PROJECTS} from '@/consts/project';
import {HOME_PAGE} from '@/consts/router';

/**
 * Project detail page
 */
export default {
    name: 'Project',
    components: {
        StackGroup,
    },
    props: {
        /**
         * Selected project ID
         */
        id: {
            type: [Number, String],
            required: false,
            default: null,
        },
    },
    data() {
        return {
            HOME_PAGE,
        };
    },
    computed: {
        /**
         * Get selected project instance by ID
         * @return {Object} Project instance
         */
        projectInstance() {
            return PROJECTS.find((item) => item.id === parseInt(this.id, 10)) || {};
        },
    },
};
</script>

<style lang="scss">
    #project {
        padding: 20px 0 50px;
        text-align: center;
        background: #fff;

        .project-image {
            width: 100%;
            border: 2px solid #bdbdbd;
        }

        .table {
            tr:first-of-type > * {
                border-top: none;
            }

            th {
                text-align: right;
            }

            ul {
                padding-left: 20px;
                list-style: initial;
            }
        }
    }
</style>
