import Menu from './menu';
import SubMenu from './sub-menu';
import MenuItem from './menu-item';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
