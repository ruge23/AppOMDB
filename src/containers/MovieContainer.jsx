import React from 'react';
import axios from 'axios';
import PerfilMovie from '../components/perfilMovie';
import { Link } from 'react-router';

export default class MovieContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movie: null,
    }
    //console.log('PARAMS',this.props.params.id)
    this.back = this.back.bind(this);
  }

  back(e){
    e.preventDefault();
    this.props.router.goBack();
  }

  componentDidMount() {
    axios.get('http://www.omdbapi.com/?apikey=20dac387&i='+this.props.params.id)
      .then((data) =>{
        console.log('DATA',data)
        this.setState({
          movie: data.data,
        })
      })
  }

  render(){
    return(
      <div>
        <PerfilMovie perfil={this.state.movie} />
        <p><button onClick={this.back}>Back</button></p>
      </div>
    )
  }
}
