import React, { Component } from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

const Navbar = () => (
    <Menu size='massive'>
      <Menu.Item name="ether-runner-logo">
        <Icon name='chevron right'/>
        ETHRacer
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Button primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
)

export default Navbar;
