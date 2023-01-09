import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CalculatorButton from '@/components/CalculatorButton.vue';

describe('CalculatorButton', () => {
  it('renders slot', () => {
    const wrapper = mount(CalculatorButton, {
      props: {
        variant: "orange"
      },
      slots: {
        default: '<span id="one">1</span>'
      }
    });
    expect(wrapper.find('#one').exists()).toBe(true)
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-orange-600"])
    );
  })
  it('renders correct style for orange variant', () => {
    const wrapper = mount(CalculatorButton, {
      props: {
        variant: "orange"
      },
      slots: {
        default: '<span id="one">1</span>'
      }
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-orange-600"])
    );
  })

  it('renders correct style for grey variant', () => {
    const wrapper = mount(CalculatorButton, {
      props: {
        variant: "grey"
      },
      slots: {
        default: '<span id="one">1</span>'
      }
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["bg-grey-600"])
    );
  })

  it('emits event on click of button', async () => {
    const wrapper = mount(CalculatorButton, {
      slots: {
        default: '<span id="one">1</span>'
      }
    });
    const closeButton = wrapper.find("button");
    await closeButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("onClick");
  })
})
