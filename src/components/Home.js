import React from 'react'

function Home(props) {
    if(props.data){
        var name = props.data.name;
        var occupation= props.data.occupation;
        var description= props.data.description;
        var city= props.data.address.city;
        var networks= props.data.social.map(function(network){
          return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
      }
    return (
        <div id="home">
            <div className='margin'/>
            <h2 className="responsive-headline">I'm {name}.</h2>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
        </div>
    )
}

export default Home
