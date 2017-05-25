import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe("Login", () => {
  let mountedLogin;

  const login = () => {
    if(!mountedLogin) {
      mountedLogin = mount(
        <Login />
      );
    }
    return mountedLogin;
  }

  it("renders a form", () => {
    const forms = login().find("form");
    expect(forms.length).toBeGreaterThan(0);
  });
})
