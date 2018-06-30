import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import I18n from "../../i18n";

class Page1Component extends Component {
    render() {
        const { Page1ComponentStyle } = styles;

        return (
            <View style={Page1ComponentStyle}>
                <Text>Page1Component</Text>
                <Text>{I18n.t('locale')}</Text>
            </View>
        );
    }
};

const styles = { 
  Page1ComponentStyle: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  }, 
};

export default Page1Component;
