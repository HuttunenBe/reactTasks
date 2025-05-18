
import './Box.css'; 

const Box = ({id, name, title, age}) => {
  console.log('This is box props',props)

  return (
    <div className="box">
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Box;
