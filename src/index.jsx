import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './props'
import './index.css';


const students = [
  { title: "Jobirbek", id: "2181645", major: "computer science" },
  { title: "Eldorbek", id: "2192047" },
  { title: "Saydullo", id: "2172940" },
  { title: "Diyorbek", id: "2123802" }
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      students.map((value, key) => {
        return (
          <App data={value} key={key} />
        )
      })

    }

  </React.StrictMode>
);

