import { USER_API } from 'api';

export const loginService = ({userId}) => {
    const GET_USER_API = USER_API+ userId +'.json';
    return fetch(GET_USER_API)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          return json;
        });
  };