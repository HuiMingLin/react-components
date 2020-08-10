import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas  } from "@fortawesome/free-solid-svg-icons";
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';
import SubMenu from './components/Menu/sub-menu';
import Transition from './components/Transition/transition';

library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={'0'} onSelect={(index) => console.log(index)} defaultOpenSubMenus={['2']}>
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
        <Button size="lg" onClick={() => setShow(!show)}>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
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
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType="primary" size="lg">A Large Button</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
