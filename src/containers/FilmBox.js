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
        {title: 'Deep Impact 2: deeperly impactfuller', id:1},
        {title: 'Volcano 2: Electric Boogaloo', id:3111},
        {title: 'March of the Pingponguins', id:111}
      ]
    };
  }

  newWindow(){

    window.open("https://www.w3schools.com");
}
  render(){
    return(
      <div className="film-box">
        <h2>UK Opening This Week</h2>
        <FilmList films={this.state.films}/>
        <div>
          <a href="https://www.google.com/search?ei=wCOEW9OKA8i6kwWyhqfICg&q=Sorry+it+don%27t+work&oq=Sorry+it+don%27t+work&gs_l=psy-ab.3..0i13k1l4j0i13i30k1j0i22i10i30k1j0i22i30k1l4.22116.24419.0.24857.14.12.0.0.0.0.307.1456.2j5j1j1.9.0....0...1c.1.64.psy-ab..5.9.1455...0j0i67k1j0i131k1j0i10k1j33i22i29i30k1.0.VvXskNiZhOg"><button>Get Showtimes >></button></a></div>
      </div>
    );
  }


}

export default FilmBox;
