import React from 'react';

export default function PageNotFound() {
  const style = {
    Notfound: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '30px',
    },
  };
  return (
    <p style={style.Notfound}>⛔🤚 Oooops, page not found !!! 🤚🛑</p>
  );
}
