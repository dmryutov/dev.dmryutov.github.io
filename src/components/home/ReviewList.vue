<template>
    <div class="bevel_after bevel_grey">
        <div id="reviews">
            <div class="container">
                <h3>ОТЗЫВЫ</h3>
                <div class="row">
                    <div class="col-12 col-lg-6 flex-column-reverse flex-lg-row review">
                        <div>
                            <h4 class="text-center text-lg-right">
                                Анастасия Пойлова, MyTutor
                            </h4>
                            <p class="text-justify text-lg-right">
                                Мы не предполагали, как нам повезло. Ранее приходилось менять
                                по 3-4 программиста, чтобы доделать сайт. В случае с Дмитрием все
                                обстояло иначе. Он в очень оперативной форме реагировал на все наши
                                комментарии и доработки (иногда казалось, что он всегда онлайн).
                            </p>
                        </div>
                        <img src="@/assets/review/poylova.png" alt="Анастасия Пойлова">
                    </div>
                    <div class="col-12 col-lg-6 flex-column flex-lg-row review">
                        <img src="@/assets/review/tislenko.png" alt="Роман Тисленко">
                        <div>
                            <h4 class="text-center text-lg-left">
                                Роман Тисленко, Макрони Трейд
                            </h4>
                            <p class="text-justify text-lg-left">
                                Начав работать с Дмитрием, вы можете быть уверены в быстром и
                                качественном выполнении всех поставленных задач. Он проявил себя
                                как профессионал и инициативный человек. Ни одно из наших
                                обращений не осталось без внимания, а все пожелания вносятся в
                                кратчайшие сроки.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6 flex-column-reverse flex-lg-row review">
                        <div>
                            <h4 class="text-center text-lg-right">
                                Федор Канаков, Менеджер проектов
                            </h4>
                            <p class="text-justify text-lg-right">
                                Работаю с Дмитрием на протяжении 3 лет. За это время он разработал
                                множество проектов для нашей веб-студии. Клиенты всегда оставались
                                довольны его работой. Мы надеемся на дальнейшее плодотворное
                                сотрудничество с Дмитрием.
                            </p>
                        </div>
                        <img src="@/assets/review/kanakov.png" alt="Федор Канаков">
                    </div>
                    <div class="col-12 col-lg-6 flex-column flex-lg-row review">
                        <img src="@/assets/review/belousova.png" alt="Мария Белоусова">
                        <div>
                            <h4 class="text-center text-lg-left">
                                Мария Белоусова, HSE Future
                            </h4>
                            <p class="text-justify text-lg-left">
                                Дмитрий с нуля создал для нас сайт, который превзошел все наши
                                ожидания и в плане функционала, и в плане дизайна. При этом Дмитрий
                                не просто хороший исполнитель, он активно включается в процесс
                                разработки решений для сайта, дает полезные рекомендации.
                            </p>
                        </div>
                    </div>
                </div>
                <a v-scroll-to="'#contact'" href="#" class="arrow">
                    <img src="@/assets/common/arrow-down.png" alt="arrow-down">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Review list component
 */
export default {
    name: 'ReviewList',
};
</script>

<style lang="scss">
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins/_breakpoints';

    #reviews {
        padding: 20px 0 50px;
        text-align: center;

        h3 {
            margin-bottom: 30px;
        }

        .review {
            display: flex;
            align-items: flex-start;
            padding: 20px 10px 20px 10px;

            @include media-breakpoint-up(lg) {
                &:last-child {
                    border-left: 1px solid #ddd;
                }
            }

            img {
                margin: 0 30px;
                padding: 4px;
                border: 1px solid #ddd;
                border-radius: 50%;

                @include media-breakpoint-down(lg) {
                    margin: 0 auto 10px;
                }
            }

            h4 {
                margin-bottom: 10px;
                font-weight: 300;
                font-size: 18px;
            }

            p {
                font-weight: 300;
                font-size: 14px;
                line-height: 22px;
            }
        }

        .row {
            margin: 0;

            @include media-breakpoint-up(lg) {
                &:first-of-type {
                    border-bottom: 1px solid #ddd;
                }
            }
        }
    }
</style>
