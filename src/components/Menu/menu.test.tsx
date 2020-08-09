import React from 'react';
import { render, RenderResult, fireEvent, cleanup, wait } from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menu-item';
import SubMenu from './sub-menu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu { ...props }>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem >
          dropdown 1
        </MenuItem>
        <MenuItem disabled>
          dropdown 2
        </MenuItem>
      </SubMenu>
      <li>dsds</li>
    </Menu>
  )
}
const createStyleFile = () => {
  const cssFile: string = `
    .submenu {
      display: none;
    }
    .submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssFile;
  return style;
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass('menu-item active');
    expect(disabledElement).toHaveClass('menu-item disabled');
  })
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('active');
    expect(activeElement).not.toHaveClass('active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup();
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  })
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('dropdown 1')).not.toBeVisible();
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);
    await wait(() => {
      expect(wrapper.queryByText('dropdown 1')).toBeVisible();
    })
    fireEvent.click(wrapper.getByText('dropdown 1'));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
    fireEvent.mouseLeave(dropdownElement);
    await wait(() => {
      expect(wrapper.queryByText('dropdown 1')).not.toBeVisible();
    })
  })
})