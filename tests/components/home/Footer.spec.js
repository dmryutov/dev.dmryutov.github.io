import {createLocalVue, mount} from '@vue/test-utils';

import Footer from '@/components/home/Footer';


const localVue = createLocalVue();


describe('components/home/Footer', () => {
    let dateNow;

    beforeAll(() => {
        dateNow = jest.spyOn(Date, 'now').mockImplementation(() => 1514764800000); // 01.01.2018
    });
    afterAll(() => {
        dateNow.mockRestore();
    });


    it('render', () => {
        const wrapper = mount(Footer);
        expect(wrapper.exists()).toBe(true);
    });

    it('computed/currentYear', () => {
        const wrapper = mount(Footer);
        expect(wrapper.exists()).toBe(true);

        // Test footer year
        const currentYear = new Date().getFullYear();
        expect(wrapper.vm.currentYear).toBe(currentYear);
    });
});
