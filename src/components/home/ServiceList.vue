<template>
    <div class="bevel_after bevel_dark">
        <div id="services">
            <div class="container">
                <h3>УСЛУГИ</h3>
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <img src="@/assets/service/service-1.png" alt="service-1">
                        <h4>Разработка с нуля</h4>
                        <p>
                            Разработка сайта / программы с нуля по самым последним
                            стандартам <span class="text-nowrap">IT-индустрии</span>
                        </p>
                    </div>
                    <div class="col-12 col-lg-3">
                        <img src="@/assets/service/service-2.png" alt="service-2">
                        <h4>Настройка CMS</h4>
                        <p>
                            Настройка CMS необходима для корректной работы всего сайта
                        </p>
                    </div>
                    <div class="col-12 col-lg-3">
                        <img src="@/assets/service/service-3.png" alt="service-3">
                        <h4>Доработка сайта</h4>
                        <p>
                            Доработка сайта для дальнейшего роста и развития уже готового сайта
                        </p>
                    </div>
                    <div class="col-12 col-lg-3">
                        <img src="@/assets/service/service-4.png" alt="service-4">
                        <h4>Веб-верстка</h4>
                        <p>
                            Верстка нескольких страниц с использованием современных технологий
                            HTML5 & CSS3
                        </p>
                    </div>
                </div>
                <a v-scroll-to="'#gallery'" href="#" class="arrow">
                    <img src="@/assets/common/arrow-down.png" alt="arrow-down">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Service list component
 */
export default {
    name: 'ServiceList',
};
</script>

<style lang="scss">
    #services {
        padding: 20px 0 50px;
        text-align: center;
        background: #fff;

        p {
            padding: 15px 0;
            color: #000;
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
        }

        img {
            margin-bottom: 15px;
        }
    }
</style>
