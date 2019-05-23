import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";


const TabNavigation = createBottomTabNavigator({
    Movies : MoviesScreen,
    TV : TVScreen,
    Search : SearchScreen
});

export default createAppContainer(TabNavigation);