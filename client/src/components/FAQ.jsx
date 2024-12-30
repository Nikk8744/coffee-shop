import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Collapse } from 'antd';

const FAQ = () => {

    // <Accordion>
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>Accordion Item #1</Accordion.Header>
    //     <Accordion.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Accordion.Body>
    //   </Accordion.Item>
    //   <Accordion.Item eventKey="1">
    //     <Accordion.Header>Accordion Item #2</Accordion.Header>
    //     <Accordion.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>

    const text = `For most people, moderate coffee consumption can be incorporated into a healthy diet`;
    
    const items = [
    {
        key: '1',
        label: 'Is Coffee Good',
        children: <p className='italic'>{text}</p>,
    },
    {
        key: '2',
        label: 'Is Coffee Good',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Is Coffee Good',
        children: <p>{text}</p>,
    },
    ];

  return (
    
    <div className='bg-[#5b725b33] pb-3'>
        <h1 className='text-center p-3 text-4xl font-bold italic text-white'>FAQs</h1>
        <div className='bg-gray-200 mx-32 my-3 rounded'>
            <Collapse accordion items={items} className='bg-slate-300' />
        </div>
    </div>
  )
}

export default FAQ