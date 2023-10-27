import './Footer.css'
import { Input, Button } from 'semantic-ui-react'
function Footer(props)
{
    return( <div className="footer">
    <div className="foot-left">
      <h2>{props.text}</h2>
    </div>
    <div className ="foot">
     <input text ="email" placeholder="Enter your Email" className="topic " />
    </div>
      <Button className="sub">Subscribe</Button>
    </div>

  )
}
export default Footer