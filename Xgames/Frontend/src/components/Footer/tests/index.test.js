import React from 'react';
import { render } from 'react-testing-library';

import Footer from '../index';

const renderComponent = () =>
  render(
    <Footer></Footer>
  );

describe('<Footer />', () => {
    it('should render an <Wrapper> tag', () => {
      const { container } = renderComponent();
      expect(container.querySelector('Wrapper')).not.toBeNull();
    });
    it('should render an <CSSBaseLine> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('CSSBaseLine')).not.toBeNull();
    });
    it('should render an <Typography> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('Typography')).not.toBeNull();
    });
    it('should render an <Grid> tag', () => {
        const { container } = renderComponent();
        expect(container.querySelector('Grid')).not.toBeNull();
    });

});

