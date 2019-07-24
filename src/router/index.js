import VueRouter from 'vue-router';

import Home from '@/layouts/home';
import Main from '@/pages/main';
import ProjectDetail from '@/pages/project';


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/',
                    component: Main,
                    name: 'main',
                },
                {
                    path: '/:id',
                    component: ProjectDetail,
                    name: 'project_detail',
                    props: true,
                },
            ],
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {x: 0, y: 0};
    },
});

export default router;
