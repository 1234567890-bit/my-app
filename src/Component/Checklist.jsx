const Checklist = ({ state }) => {

    function Checkbox(props) {

        return (
            <>
                <input type="checkbox" />
                <label> {props.id} - {props.description}</label><br></br>
            </>
        )
    }

    return (
        <>
          
<ul>
          {state.Tasks.map((car) => <Checkbox key={car.id} description={car.description} />)}
                </ul>
        
  
        </>
      );
  } 
  export default Checklist;