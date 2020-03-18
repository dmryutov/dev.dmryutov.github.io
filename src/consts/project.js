/**
 * Platform type
 */
const PLATFORM_WEB = 'Web';
const PLATFORM_DESKTOP = 'Desktop';
/**
 * Backend technologies
 */
const STACK_CELERY = 'Celery';
const STACK_CPP = 'C++';
const STACK_DELPHI = 'Delphi';
const STACK_DIAFAN = 'Diafan CMS';
const STACK_DJANGO = 'Django';
const STACK_DRF = 'Django REST Framework';
const STACK_JOOMLA = 'Joomla';
const STACK_NODEJS = 'Node.js';
const STACK_OPENCART = 'OpenCart';
const STACK_PYTHON = 'Python';
const STACK_PHP = 'PHP';
const STACK_WORDPRESS = 'WordPress';
/**
 * Frontend technologies
 */
const STACK_BOOTSTRAP = 'Bootstrap';
const STACK_CSS = 'CSS';
const STACK_CSS3 = 'CSS3';
const STACK_HTML = 'HTML';
const STACK_HTML5 = 'HTML5';
const STACK_JQUERY = 'jQuery';
const STACK_NUXT = 'Nuxt.js';
const STACK_OPENGL = 'OpenGL';
const STACK_QT = 'Qt';
const STACK_RAD_STUDIO = 'RAD Studio';
const STACK_REACT = 'React';
const STACK_SASS = 'SASS';
const STACK_VUE = 'Vue.js';
const STACK_VUETIFY = 'Vuetify';
const STACK_WEBPACK = 'Webpack';
/**
 * Database technologies
 */
const STACK_MYSQL = 'MySQL';
const STACK_ORACLE = 'Oracle';
const STACK_POSTGRESQL = 'PostgreSQL';
const STACK_REDIS = 'Redis';
const STACK_SQLITE = 'SQLite';
/**
 * Other technologies
 */
const STACK_DOCKER = 'Docker';
const STACK_GITLAB_CI = 'GitLab CI';
const STACK_PROMETHEUS = 'Prometheus';


/**
* List of servers and tools
*/
export const PROJECTS = [
    {
        id: 1,
        name: 'Макрони Трейд',
        description: 'Внутренняя корпоративная система для учета объектов недвижимости',
        date: '2013-07-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 2,
        name: 'Едро 2.0',
        description: 'Сайт учебного проекта для факультета политологии',
        date: '2013-09-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_WORDPRESS,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 3,
        name: 'Luck Duck',
        description: 'Интернет-магазин продуктов',
        date: '2013-11-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 4,
        name: 'Журнал Договоров',
        description: 'Внутренняя корпоративная система для учета договоров аренды недвижимости',
        date: '2013-12-01',
        platform: PLATFORM_DESKTOP,
        stack: {
            backend: [
                STACK_DELPHI,
            ],
            frontend: [
                STACK_RAD_STUDIO,
            ],
            db: [
                STACK_SQLITE,
            ],
        },
    },
    {
        id: 5,
        name: 'КанКарт',
        description: 'Интернет-магазин товаров для картинга',
        date: '2014-01-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 6,
        name: 'exPhone',
        description: 'Сервис обмена телефонов по системе Trade-in',
        date: '2014-03-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_WORDPRESS,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 7,
        name: 'Car-Devices',
        description: 'Интернет-магазин автомагнитол и видеорегистраторов',
        date: '2014-08-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 8,
        name: 'Азия-Европа',
        description: 'Портал юридической компании, работающей в миграционной сфере',
        date: '2014-12-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_JOOMLA,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 9,
        name: 'ЦветткоF',
        description: 'Интернет-магазин цветов',
        date: '2015-02-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 10,
        name: 'Car-Devices',
        description: 'Обновленный дизайн интернет-магазина автомагнитол и видеорегистраторов',
        date: '2015-04-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 11,
        name: 'HSE Future',
        description: 'Центр репетиторства НИУ ВШЭ',
        date: '2015-09-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 12,
        name: 'Sklad-Doors',
        description: 'Интернет-магазин дверей',
        date: '2015-10-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 13,
        name: 'TrueCaser',
        description: 'Интернет-магазин чехлов для телефонов',
        date: '2015-10-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_JOOMLA,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 14,
        name: 'MyTutor',
        description: 'Образовательная платформа для школьников и студентов',
        date: '2015-11-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 15,
        name: 'Макрони Трейд',
        description: 'Обновленный дизайн внутренней корпоративной системы для учета объектов недвижимости',
        date: '2016-01-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 16,
        name: 'Aruks',
        description: 'Сервис, предоставляющий услуги по управлению недвижимостью',
        date: '2016-04-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_JOOMLA,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 17,
        name: 'Практика Жить',
        description: 'Личная страница ведущей женских программ, тренингов и оздоровительных практик Юлии Смирновой',
        date: '2016-10-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_WORDPRESS,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 18,
        name: 'Space Invaders',
        description: 'Клон ретро-игры Space Invaders',
        date: '2016-12-01',
        platform: PLATFORM_DESKTOP,
        stack: {
            backend: [
                STACK_CPP,
            ],
            frontend: [
                STACK_QT,
                STACK_OPENGL,
            ],
        },
    },
    {
        id: 19,
        name: 'Частоты Жизни',
        description: 'Интернет-магазин футболок и аксессуаров',
        date: '2017-04-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_JOOMLA,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 20,
        name: 'РЕММИР',
        description: 'Интернет-магазин строительных и отделочных материалов',
        date: '2017-07-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_OPENCART,
            ],
            frontend: [
                STACK_HTML,
                STACK_CSS,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 21,
        name: 'Частоты Жизни',
        description: 'Сайт расчета персональных карт',
        date: '2017-08-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PHP,
                STACK_DIAFAN,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_JQUERY,
            ],
            db: [
                STACK_MYSQL,
            ],
        },
    },
    {
        id: 22,
        name: 'БД ГАС "Правосудие"',
        description: 'Дипломный проект. Поисковик по базе сервиса ГАС "Правосудие"',
        date: '2018-11-01',
        platform: PLATFORM_DESKTOP,
        stack: {
            backend: [
                STACK_CPP,
            ],
            frontend: [
                STACK_QT,
            ],
            db: [
                STACK_SQLITE,
            ],
        },
    },
    {
        id: 23,
        name: 'Universal Text Extractor',
        description: 'Дипломны проект. Универсальный парсер сайтов и конвертер документов в HTML формат',
        date: '2018-12-01',
        platform: PLATFORM_DESKTOP,
        stack: {
            backend: [
                STACK_CPP,
            ],
            frontend: [
                STACK_QT,
            ],
        },
    },
    {
        id: 24,
        name: 'React-Todo',
        description: 'Демо проект Django + React. Простой менеджер задач',
        date: '2018-01-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_REACT,
            ],
            db: [
                STACK_SQLITE,
            ],
        },
    },
    {
        id: 25,
        name: 'Transactions Viewer',
        description: 'Дипломный проект. Поиск и определение подозрительности финансовых операций',
        date: '2018-01-01',
        platform: PLATFORM_DESKTOP,
        stack: {
            backend: [
                STACK_CPP,
            ],
            frontend: [
                STACK_QT,
            ],
            db: [
                STACK_ORACLE,
            ],
        },
    },
    {
        id: 26,
        name: 'Scenario Tool',
        description: 'Инструмент для создания и расчета прогнозных сценариев',
        date: '2018-06-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_BOOTSTRAP,
                STACK_JQUERY,
            ],
            db: [
                STACK_POSTGRESQL,
            ],
        },
    },
    {
        id: 27,
        name: 'HR Evaluation',
        description: 'Инструмент для управления опросами сотрудников',
        date: '2018-08-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
            ],
            frontend: [
                STACK_HTML5,
                STACK_CSS3,
                STACK_BOOTSTRAP,
                STACK_JQUERY,
            ],
            db: [
                STACK_POSTGRESQL,
            ],
        },
    },
    {
        id: 28,
        name: 'Server Homepage',
        description: 'Домашняя страница отдела. Ссылки на внутренние инструменты. Мониторинг загруженности серверов',
        date: '2018-11-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
                STACK_DRF,
            ],
            frontend: [
                STACK_HTML5,
                STACK_SASS,
                STACK_BOOTSTRAP,
                STACK_VUE,
                STACK_WEBPACK,
            ],
        },
    },
    {
        id: 29,
        name: 'Modeling Tool',
        description: 'Инструмент для моделирования',
        date: '2019-01-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
                STACK_DRF,
                STACK_CELERY,
                STACK_CPP,
            ],
            frontend: [
                STACK_HTML5,
                STACK_SASS,
                STACK_VUE,
                STACK_VUETIFY,
                STACK_WEBPACK,
            ],
            db: [
                STACK_POSTGRESQL,
                STACK_REDIS,
            ],
            other: [
                STACK_NODEJS,
                STACK_DOCKER,
                STACK_GITLAB_CI,
                STACK_PROMETHEUS,
            ],
        },
    },
    {
        id: 30,
        name: 'Multimedia Reach Calculator',
        description: 'Оптимизатор мультимедийного охвата',
        date: '2019-06-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
                STACK_DRF,
                STACK_CPP,
            ],
            frontend: [
                STACK_HTML5,
                STACK_SASS,
                STACK_VUE,
                STACK_VUETIFY,
                STACK_WEBPACK,
            ],
            db: [
                STACK_POSTGRESQL,
            ],
            other: [
                STACK_NODEJS,
                STACK_DOCKER,
                STACK_GITLAB_CI,
                STACK_PROMETHEUS,
            ],
        },
    },
    {
        id: 31,
        name: 'Rose\'n\'Joy',
        description: 'Интернет-магазин цветов',
        date: '2020-02-01',
        platform: PLATFORM_WEB,
        stack: {
            backend: [
                STACK_PYTHON,
                STACK_DJANGO,
                STACK_DRF,
            ],
            frontend: [
                STACK_HTML5,
                STACK_SASS,
                STACK_NUXT,
                STACK_BOOTSTRAP,
                STACK_WEBPACK,
            ],
            db: [
                STACK_POSTGRESQL,
            ],
            other: [
                STACK_DOCKER,
            ],
        },
    },
].reverse();
