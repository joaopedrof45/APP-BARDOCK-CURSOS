import React from 'react';
import API from './api';

export default class CursosList extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
    
        API.get(`courses/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })

          API.delete(`courses/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
 
}



