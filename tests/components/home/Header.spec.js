import {createLocalVue, mount} from '@vue/test-utils';

import Header from '@/components/home/Header';


const localVue = createLocalVue();


describe('components/home/Header', () => {
    it('render', () => {
        const wrapper = mount(Header);
        expect(wrapper.exists()).toBe(true);
    });
});
