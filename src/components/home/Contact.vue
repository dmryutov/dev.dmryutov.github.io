<template>
    <div class="bevel_after bevel_dark">
        <div id="contact">
            <div class="container">
                <h3>КОНТАКТЫ</h3>
                <P>
                    Если вы хотите задать мне вопрос, предложить что-то или
                    обсудить &mdash; свяжитесь со мной!
                </p>
                <form
                    ref="contactForm"
                    :action="LINK_MAIL_SERVICE"
                    class="row"
                    method="POST"
                >
                    <div class="col-12 col-lg-9">
                        <div class="row">
                            <div class="col-12 col-lg-6 form-group">
                                <input
                                    v-model="emailData.name"
                                    v-validate="'required'"
                                    class="form-control"
                                    :class="{'is-invalid': errors.first('name')}"
                                    name="name"
                                    placeholder="* Имя"
                                    type="text"
                                >
                            </div>
                            <div class="col-12 col-lg-6 form-group">
                                <input
                                    v-model="emailData.email"
                                    v-validate="'required|email'"
                                    class="form-control"
                                    :class="{'is-invalid': errors.first('email')}"
                                    name="email"
                                    placeholder="* Email"
                                    type="email"
                                >
                            </div>
                            <div class="col-12 form-group">
                                <textarea
                                    v-model="emailData.message"
                                    v-validate="'required'"
                                    class="form-control"
                                    :class="{'is-invalid': errors.first('message')}"
                                    name="message"
                                    placeholder="* Сообщение"
                                    rows="5"
                                />
                            </div>
                            <div class="col-12 form-group">
                                <button
                                    class="btn btn-outline-danger btn-block btn-send-email"
                                    @click.prevent="sendEmail"
                                >
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 info">
                        <img src="@/assets/common/avatar.jpg">
                        <p>
                            Я всегда рад ответить на любые ваши вопросы, и готов обсудить
                            ваши предложения.
                        </p>
                        <ul>
                            <li>
                                <a :href="'tel:' + LINK_PHONE">
                                    <i class="fa fa-phone" /> {{ LINK_PHONE }}
                                </a>
                            </li>
                            <li>
                                <a :href="'mailto:' + LINK_EMAIL">
                                    <i class="fa fa-envelope" /> {{ LINK_EMAIL }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </form>
                <a v-scroll-to="'#header'" href="#" class="arrow">
                    <img src="@/assets/common/arrow-up.png" alt="arrow-up">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {LINK_EMAIL, LINK_MAIL_SERVICE, LINK_PHONE} from '@/consts/router';
/**
 * Contact form component
 */
export default {
    name: 'Contact',
    data() {
        return {
            LINK_EMAIL,
            LINK_MAIL_SERVICE,
            LINK_PHONE,
            /**
             * Email data
             */
            emailData: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    methods: {
        /**
         * Validate fields and send email
         */
        sendEmail() {
            this.$validator.validateAll().then((isValid) => {
                if (isValid) {
                    this.$refs.contactForm.submit();
                }
            });
        },
    },
};
</script>

<style lang="scss">
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins/_breakpoints';

    #contact {
        padding: 20px 0 50px;
        text-align: center;
        background: #f2f2f2;

        p {
            font-weight: 300;
            font-size: 18px;

            @include media-breakpoint-down(lg) {
                font-size: 16px;
            }
        }

        form {
            margin: 30px 0 15px;

            input {
                padding: 25px 20px;
            }

            textarea {
                padding: 20px;
                resize: none;
            }

            .btn-send-email {
                color: #f1453d;
                border-color: #f1453d;

                &:hover {
                    color: #fff;
                    background-color: #f1453d;
                }
            }
        }

        .info {
            img {
                display: block;
                width: 130px;
                margin: 0 auto 20px;
                padding: 4px;
                background: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 50%;
            }

            p {
                margin-bottom: 15px;
                font-size: 14px;
            }

            ul li {
                margin-bottom: 10px;
                font-weight: 300;

                a {
                    text-decoration: none;
                }

                i {
                    width: 20px;
                }
            }

            @include media-breakpoint-down(lg) {
                margin-top: 20px;
            }
        }
    }
</style>
