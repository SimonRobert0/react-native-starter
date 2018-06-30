import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import I18n from "../../i18n";

class Page2Component extends Component {
    render() {
        const { Page2Component } = styles;

        return (
            <View style={Page2Component}>
                <Text>Page2Component</Text>
                <Text>{I18n.t('locale')}</Text>
            </View>
        );
    }
};

const styles = { 
  Page2Component: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  }, 
};

export default Page2Component;
