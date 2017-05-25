import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe("Footer", () => {
  let footerMounted;
  let props;

  const footer = () => {
    if(!footerMounted) {
      footerMounted = mount(
        <Footer {...props}/>
      )
    }
    return footerMounted;
  }


  it("renders a footer", () => {
    const bottomFoot = footer().find("footer");
    expect(bottomFoot.length).toBeGreaterThan(0);
  })

  it("renders one paragraph element", () => {
    const paragraph = footer().find("p");
    expect(paragraph.length).toBe(1);
  });
})
