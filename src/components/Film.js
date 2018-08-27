import React from 'react';


  const Film = function (props){
    console.log(props);
  return (
         <tr>
           <td>
           <img src="images/addIcon.png"/>
           </td>
         <td>
            <h4>{props.title}</h4>
         </td>
         <td>  <a className="showtimes">showtimes</a></td>

         </tr>
       )
}


export default Film;
