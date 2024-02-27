
import AdidasShoes from "../../assets/shoes/adidas_superstar.jpg"

function Shoes(props){
    return(
        <li>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </li>
    )
}

function menShoe() {
  return (
    <section>
        <ul>
            <Shoes name="Adidas Superstar" price="3400"image={AdidasShoes}/>
        </ul>
    </section>
  )
}

export default menShoe