import {createLocalVue, mount} from '@vue/test-utils';
import VueScrollTo from 'vue-scrollto';

import Header from '@/components/home/Header';


const localVue = createLocalVue();
localVue.use(VueScrollTo);


describe('components/home/Header', () => {
    it('render', () => {
        const wrapper = mount(Header, {
            localVue,
            stubs: ['router-link'],
        });
        expect(wrapper.exists()).toBe(true);
    });
});
