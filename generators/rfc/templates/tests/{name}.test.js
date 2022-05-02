import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import <%= name %> from '..';

describe('<<%= name %> /> props', () => {
    it('should render <%= name %> with default props', () => {
        const { container } = render(
            <<%= name %> />
        );

        expect(container).toMatchSnapshot();
    });
});
