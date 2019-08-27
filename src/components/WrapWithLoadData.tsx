import * as React from 'react';
const { useState, useEffect } = React;

export default (WrappedComponent, name) => {
  const NewComponent = () => {
    const [data, setData] = useState('');
    const handleChangeData = (data) => {
      setData(data);
      localStorage.setItem(name, data);
    }
    useEffect(() => {
      const odata = localStorage.getItem(name);
      setData(odata);
    }, []);
    return <WrappedComponent data={data} onChangeData={handleChangeData}/>
  }
  return NewComponent;
}
