

import Lottie from "lottie-react";
import anim from "../animation/exam.json";


const Header = () => {
    return(<>
    <div class="container">
        <div class="row">
            <div class="col">
                <Lottie animationData={anim} loop={true}  />



            </div>
            <div class="col v-center"></div>
            <div class="col">
                <p className="h1">Industrial training weekly test<br></br></p>
                <p className="h2">Instruction<br></br></p>
               <ul>
              <li>  <p className="h6">30 marks</p></li>
                <li><p className="h6">MCQ type</p></li>
                <li><p className="h6">Limited type</p></li>
                </ul>
                <button type="button" class="btn btn-primary">Open web-dev test</button><br></br>
                <br></br>
                <button type="button" class="btn btn-primary">Open web-dev test</button>

            </div>
        </div>
    </div>
    </>)
}
export default Header;