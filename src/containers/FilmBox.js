import React from 'react';
import FilmList from '../components/FilmList.js'

class FilmBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        {title: 'The rise and fall of Pat Sharp', id: 123},
        {title: 'Catchphrase: say what you saw', id:321},
        {title: 'Coronation St: the motion picture. An IMAX experience', id:31},
        {title: 'Starship Troopers 5: availbile exclusively to tesco', id:21},
        {title: 'Deep Impact 2: deeperly impactfuler', id:1},
        {title: 'Volcano 2: Electric Boogaloo', id:3111},
        {title: 'March of the Pingponguins', id:111}
      ]
    };
  }
  render(){
    return(
      <div className="film-box">
        <h2>UK Opening This Week</h2>
        <FilmList films={this.state.films}/>
        <a>See more opening this week >></a>
      </div>
    );
  }
}


export default FilmBox;
