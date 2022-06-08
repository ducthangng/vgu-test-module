// Reusable components (e.g: Navbar, Footer, Slider,...) to be put here

// File names in Pascal Case (e.g: RegisterForm.js, CategoryItem.js,...)

// If there are many components of
// the same type (e.g: HomeNavbar, DashboardNavbar,...),
// create a subfolder for them

import React, { useState, useEffect } from 'react';
import { List, Input } from 'antd';
import ReactDragListView from 'react-drag-listview';

const mockData = [
  { title: 'row 1' },
  { title: 'row 2' },
  { title: 'row 3' },
  { title: 'row 4' },
  { title: 'row 5' },
];

export default function Footer() {
  const [data, setData] = useState<{ title: string }[]>(mockData);

  const onDragEnd = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0) return;
    const items = [...data];
    const item = items.splice(fromIndex, 1)[0];
    items.splice(toIndex, 0, item);
    setData(items);
  };

  const onOuterDragEnd = (fromIndex: number, toIndex: number) => {};

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div>
        <div>
          <div>
            <h3>ABC.vn</h3>
            <p>Đây là thông tin miêu tả trang web này</p>
          </div>
        </div>
        <p>
          <a href="#">ĐĂNG KÝ NGAY</a>
        </p>
        <div className="px-10 py-10 grid-cols-2 md:grid-cols-4 hover:bg-red-300 bg-green-300 grid gap-4">
          <div>01</div>
          <div>01</div>
          <div>09</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
        </div>
      </div>

      <ReactDragListView nodeSelector=".draggable" onDragEnd={onDragEnd}>
        <List
          className="bg-red-200"
          size="small"
          bordered
          dataSource={data.slice(0, 3)}
          renderItem={(item) => {
            return <p className="draggable">{item.title}</p>;
          }}
        />
        <List
          className="bg-green-200"
          size="small"
          bordered
          dataSource={data.slice(3, data.length)}
          renderItem={(item) => {
            return <p className="draggable">{item.title}</p>;
          }}
        />
      </ReactDragListView>
    </div>
  );
}
