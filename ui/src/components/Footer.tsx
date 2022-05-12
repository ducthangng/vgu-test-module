// Reusable components (e.g: Navbar, Footer, Slider,...) to be put here

// File names in Pascal Case (e.g: RegisterForm.js, CategoryItem.js,...)

// If there are many components of
// the same type (e.g: HomeNavbar, DashboardNavbar,...),
// create a subfolder for them

import React from 'react';
import { Breadcrumb } from 'antd';

export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <img
            src="https://www.svgrepo.com/show/262284/blocks-toy.svg"
            alt="ABC Logo"
          />
          <div>
            <h3>ABC.vn</h3>
            <p>Đây là thông tin miêu tả trang web này</p>
          </div>
        </div>
        <p>
          <a href="#">ĐĂNG KÝ NGAY</a>
        </p>
      </div>

      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
