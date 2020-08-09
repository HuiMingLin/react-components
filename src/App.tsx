import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';
import SubMenu from './components/Menu/sub-menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={'0'} onSelect={(index) => console.log(index)} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 4
          </MenuItem>
        </Menu>
        <Button className="custom">hello</Button>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Small} disabled>hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
