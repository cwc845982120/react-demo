/**
 * @author <%= author%>
 * created on <%= date %>
 */
import React from 'react';

import '../assets/scss/<%= moduleName%>.scss';

class <%= name %> extends React.Component {
    render() {
        return (
            <div className = "<%= moduleName%>">
            </div>
        );
    }
};

export default <%= name %>;