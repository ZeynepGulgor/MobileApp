import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

const FirebaseContext = createContext()

const FirebaseProvider = (props) => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/routes/api/data')
      .then(res => {
        setData(res.data)
      }).catch(function (error) {
        console.log(error);
      })
  }, [data])

  const addUser = (user, data) => {
    axios.post('http://localhost:3000/routes/api/data/add-user', {
      user,data
    }).then(res => {
      setData(res.data)
    }).catch(function (error) {
      console.log(error);
    })
  }

  return (
    <FirebaseContext.Provider
      value={{
        user: user,
        addUser: addUser
      }}>
      {props.children}
    </FirebaseContext.Provider >
  )
};

export { FirebaseProvider, FirebaseContext }
