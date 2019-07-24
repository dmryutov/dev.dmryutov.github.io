import {createLocalVue, mount} from '@vue/test-utils';

import Home from '@/layouts/home';


const localVue = createLocalVue();


describe('layouts/home', () => {
    it('render', () => {
        const wrapper = mount(Home, {
            localVue,
            stubs: ['router-link', 'router-view', 'app-header', 'app-footer'],
        });
        expect(wrapper.exists()).toBe(true);

        // Child components
        expect(wrapper.contains('app-header-stub')).toBe(true);
        expect(wrapper.contains('app-footer-stub')).toBe(true);
    });
});
