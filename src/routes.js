import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './screens/Main';
import NewEntry from './screens/NewEntry';
import Report from './screens/Report';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        NewEntry,
        Report
    },{
        initialRouteName:'Main',
        backBehavior:'order'
    })
);

export default Routes;