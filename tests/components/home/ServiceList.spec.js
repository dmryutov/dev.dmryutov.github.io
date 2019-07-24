import {createLocalVue, mount} from '@vue/test-utils';

import ServiceList from '@/components/home/ServiceList';
import VueScrollTo from 'vue-scrollto';


const localVue = createLocalVue();
localVue.use(VueScrollTo);


describe('components/home/ServiceList', () => {
    it('render', () => {
        const wrapper = mount(ServiceList, {
            localVue,
        });
        expect(wrapper.exists()).toBe(true);
    });
});
