import React from 'react';
import PropsTypes from 'prop-types';
function App() {
  const profiles = [
    {name: "ルフィ",age:19},
    {name: "ゾロ",age:20},
    {name: "ナミ",age:19},
    {name: "サンジ",age:20},
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return <Onepiece name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}
const Onepiece = (props) =>{
  return <div>I am {props.name} and {props.age}!!!</div>
}
Onepiece.propsTypes = {
  name: PropsTypes.string
}

export default App;
