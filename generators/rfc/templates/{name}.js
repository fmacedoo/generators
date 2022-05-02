import { } from 'prop-types';
import { Text } from 'react-native';
import React from 'react';

import { Styled<%= name %> } from './styles';

export const <%= name %> = () => (
    <Styled<%= name %>>
        <Text><%= name %></Text>
    </Styled<%= name %>>
);

<%= name %>.propTypes = {

};

export default <%= name %>;
