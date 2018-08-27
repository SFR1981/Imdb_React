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
      <td>

      </td>
    <td>
       <a href="https://www.google.com/search?ei=wCOEW9OKA8i6kwWyhqfICg&q=Sorry+it+don%27t+work&oq=Sorry+it+don%27t+work&gs_l=psy-ab.3..0i13k1l4j0i13i30k1j0i22i10i30k1j0i22i30k1l4.22116.24419.0.24857.14.12.0.0.0.0.307.1456.2j5j1j1.9.0....0...1c.1.64.psy-ab..5.9.1455...0j0i67k1j0i131k1j0i10k1j33i22i29i30k1.0.VvXskNiZhOg">See more opening this week>></a>
    </td>
    <td> </td>
    </table>);
  }

}


export default FilmList;
