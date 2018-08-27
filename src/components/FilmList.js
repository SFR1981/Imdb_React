import React from 'react';
import Film from './Film.js';

class FilmList extends React.Component {
  render(){
    const filmComponents = this.props.films.map((film)=>{
      return (<Film
        title = {film.title}
        key ={film.title}
        >
      </Film>);
    })
    return (<table>
      {filmComponents}
    </table>);
  }

}


export default FilmList;
