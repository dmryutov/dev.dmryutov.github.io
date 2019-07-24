import {createLocalVue, mount} from '@vue/test-utils';

import ServiceList from '@/components/home/ServiceList';


const localVue = createLocalVue();


describe('components/home/ServiceList', () => {
    it('render', () => {
        const wrapper = mount(ServiceList);
        expect(wrapper.exists()).toBe(true);
    });
});
