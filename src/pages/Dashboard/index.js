/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { Container } from './styles';
import * as Actions from '../../store/auth/actions';

import api from '../../services/api';

export default function Dashboard() {
  const [naver, setNavers] = useState([]);

  useEffect(() => {
    async function loadNavers() {
      const response = await api.get('/navers');

      const data = response.data.map((navers) => ({
        ...navers,
      }));

      setNavers(data);
    }
    loadNavers();
  }, []);

  // const handleDelete = async (e, id) => {
  //   e.persist();

  //   setNavers([...naver.filter((navers) => navers.id !== id)]);
  // };

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      await api.delete(`/navers/${id}`);
      const novosNavers = [...naver];
      novosNavers.splice(index, 1);
      setNavers(novosNavers);
    } catch (err) {
      console.log(err('Não deletei'));
    }
  };

  return (
    <Container>
      {naver.map((navers) => (
        <li key={navers.id}>
          <img src={navers.url} alt={navers.name} />
          <strong>{navers.name}</strong>
          <span>{navers.job_role}</span>
          <MdDelete
            size={16}
            cursor="pointer"
            color="#212121"
            onClick={(e) => handleDelete(e, navers.id)}
          />
        </li>
      ))}
    </Container>
  );
}
