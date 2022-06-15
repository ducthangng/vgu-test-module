import React, { useState, useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Divider } from 'antd';
import { Pagination } from 'antd';
import { Class } from '../models/Class';
// toast
import { toast } from 'react-toastify';
// fetches
import { classApi } from '../api/classApi';
// routing
import { useParams, useNavigate } from 'react-router-dom';

function GroupSelection() {
  const [classes, setClasses] = useState<Class[]>([]);

  const fetchData = async () => {
    try {
      let data = await classApi.getAll();
      console.log(data);
      setClasses(data);
    } catch (error) {
      toast(`error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '60%',
      }}
    >
      <Divider
        orientation="left"
        style={{ fontSize: '25px', fontFamily: 'Roboto' }}
      >
        Choose the class
      </Divider>
      <Row
        gutter={[20, 20]}
        justify="space-between"
        style={{ marginBottom: '5em' }}
      >
        {classes.map((item) => {
          return (
            <div
              style={{
                borderColor: '#d4d4d6',
                borderWidth: '1px',
                borderRadius: '20px',
              }}
            >
              <GroupCard
                id={item.id}
                className={item.className}
                info={item.info}
                announcement={item.announcement}
                roomCode={item.roomCode}
                level={item.level}
              />
            </div>
          );
        })}
      </Row>
      <Row justify="center">
        <Pagination defaultCurrent={1} total={5} style={{ color: '#8172D5' }} />
      </Row>
    </div>
  );
}

export default GroupSelection;
