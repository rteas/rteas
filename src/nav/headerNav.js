import React, { Component } from 'react';
import Nav from './Nav';
import './css/Nav.css';

class HeaderNav extends Nav {

  toggleNav(){

      var navButton = document.querySelector('.mobile-nav-button');
      var navItems = document.querySelectorAll('.item-slider');

      navButton.classList.toggle('nav-on');

      var i;
      for(i = 0; i < navItems.length; i++){
          console.log(navItems[i]);
          var newClass = 'show-menu';
          navItems[i].classList.toggle(newClass);
      }
  }

  clearNav(){
    var navButton = document.querySelector('.mobile-nav-button');
    var navItems = document.querySelectorAll('.item-slider');

    navButton.classList.remove('nav-on');
    var i;
    for(i = 0; i < navItems.length; i++){
        console.log(navItems[i]);
        var newClass = 'show-menu';
        navItems[i].classList.remove(newClass);
    }
  }

  render(){
    return (
      <div className="header-nav">
        <div class="fixed-nav">
              <div class="flex-nav">
                  <div class="header-logo">
                      <span onClick={this.toggleNav} class="mobile-nav-button"></span>
                      <span onClick={this.clearNav} class="logo-button">Richy Teas</span>
                  </div>
                  <div id="nav-menu" class="header-links mobile-hide">
                      <ul>
                          <li onClick={this.toggleNav} class="item-slider menu-slide">About</li>
                          <li onClick={this.toggleNav} class="item-slider menu-slide2">Projects</li>
                          <li onClick={this.toggleNav} class="item-slider menu-slide3">Resume</li>
                          <li onClick={this.toggleNav} class="item-slider menu-slide4">Contact</li>
                      </ul>
                  </div>
              </div>
        </div>
        <div class="header-pad"></div>
      </div>

    );
  }
}

export default HeaderNav;
