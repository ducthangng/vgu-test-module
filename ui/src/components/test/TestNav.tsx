import React from "react";
import { Button, MenuProps } from 'antd';
import { Avatar, Menu } from 'antd';
import { AntDesignOutlined  } from '@ant-design/icons';

interface TestNavProps {
    fullName: string,
    studentId: string,
    testPart: string,
    timeLeft: string,
    submitTest: (event: React.MouseEvent<HTMLElement>) => void
}

const date:Date = new Date();

export default function TestNav(props: TestNavProps) {

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };
    return (
        <Menu 
            mode="inline"
            defaultSelectedKeys={['mail']}
            style={{
                width: "200px",
                paddingTop: 20,
                paddingBottom: 20,
                textAlign: "center",
                borderRadius: 5
            }}
        >
            <div
                style={{
                    lineHeight: "200%",
                    paddingLeft: 20,
                    paddingRight: 20
                }}
            >
                <Avatar
                    size={55}
                    icon={<AntDesignOutlined />}
                />
                <p 
                    style={{ paddingTop: 10 }}
                >{ props.fullName }</p>
                <p>ID: { props.studentId }</p>

                <hr/>

                <h3 style={{ fontWeight: "bold" }}>{ props.testPart }</h3>
            </div>

            <Menu.Item key="mail">
            Navigation One
            </Menu.Item>
            <Menu.Item key="test">
            Navigation Two
            </Menu.Item>

        
            <div
                style={{
                    lineHeight: "200%",
                    paddingLeft: 20,
                    paddingRight: 20
                }}
            >
                <button
                    style={{
                        borderRadius: 8,
                        margin: 10,
                        padding: 5,
                        paddingLeft: 25,
                        paddingRight: 25
                    }}
                    disabled
                >Time: {props.timeLeft}</button>

                <Button
                    type="primary"
                    style={{
                        borderRadius: 8,
                        margin: 10,
                        padding: 5,
                        paddingLeft: 25,
                        paddingRight: 25,
                        fontWeight: "bold"
                    }}
                    onClick={props.submitTest}
                >SUBMIT</Button>
            </div>

        </Menu>
    );
}