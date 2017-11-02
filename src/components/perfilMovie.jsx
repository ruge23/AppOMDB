import React from 'react';

export default function PerfilMovie (props){
  console.log(props)
  if(!props.perfil){
    return (<h2> Loading... </h2>)
  } else {
    return(
      <div>
        <center><h1>Perfil Movie</h1></center>
          <div className= 'row'>
            <div className="col-md-12">
              <div className='thumbnail'>
                <div className='content'>
                  <img src={props.perfil.Poster} className='img-respons' />
                  <div className='caption'>
                    <h3>
                      Actors :{props.perfil.Actors}
                    </h3>
                    <br />
                    <h3>
                      Awards : {props.perfil.Awards}
                    </h3>
                    <br />
                    <h3>
                      Country : {props.perfil.Country}
                    </h3>
                    <br />
                    <h3>
                      Director : {props.perfil.Director}
                    </h3>
                    <br />
                    <h3>
                      Genre : {props.perfil.Genre}
                    </h3>
                    <br />
                    <h3>
                      Language : {props.perfil.Language}
                    </h3>
                    <br />
                    <h3>
                      Runtime : {props.perfil.Runtime}
                    </h3>
                    <br />
                    <h3>
                      Title : {props.perfil.Title}
                    </h3>
                    <br />
                    <h3>
                      Year : {props.perfil.Year}
                    </h3>
                    <div className="control-buttons">
                    <button onClick={function incrementar() {increment(i)}} className="likes">&hearts;</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
