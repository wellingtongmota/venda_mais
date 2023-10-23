import { createContext, useEffect, useState } from "react";
import { userData } from "../utils/Data";

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {

  const [properties, setProperties] = useState([{}]);

  useEffect(() => {
    setProperties(userData)
  }, [])

  const user = {
    labels: properties.map(data => data.propertie),
    datasets: [{
      label: 'Nível',
      data: properties.map(data => data.value),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(175, 175, 175, 0.5)',
        'rgba(0, 0, 227, 0.5)',
      ],
      borderWidth: 1,
      color: '#fff',
    }],
  };

  const handleIncrement = (id) => {
    setProperties(properties.map(item => {
      if (item.id === id) {
        return { ...item, value: item.value < 5 ? item.value + 1 : item.value }
      } else {
        return item
      }
    }))
  }

  const handleDecrement = (id) => {
    setProperties(properties.map(item => {
      if (item.id === id) {
        return { ...item, value: item.value > 0 ? item.value - 1 : item.value }
      } else {
        return item
      }
    }))
  }

  return (
    <UserContext.Provider value={{ properties, setProperties, user, handleIncrement, handleDecrement }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider