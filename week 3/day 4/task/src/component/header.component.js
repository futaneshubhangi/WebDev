import  Lottie from "lottie-react" ;
import task from "../Annimation/task.json";

const Header = () => {
    return(

        <>
        <div class="container">
  <div class="row">
    <div class="col">
      <Lottie animationData={task} Loop={true}style={{height:"600px"}}/>
      
    </div>
    
  </div>
</div>
        </>
    )
}
export default Header;