

import cha from './Images/cha.png';
import clr from './Images/clr.png';



import './style/Gv.css';

function Gv() {
  return (
    <div className="gv-outer-cover">
    
<div className='gv-r1-cover'>

<div className='gv-r1-chair-1'>
  <div className='gv-r1-chr-1-pic'>
    
    <img src={cha}/>
     </div>



  
  <label className='gv-r1-vel-ethit-eusmod'>Vel elit euismod</label>
<div className='gv-r1-mooncolor'>
<img src={clr}/>
</div>

  
  
  <div className='gv-chr1-dollor-lbl'> 
  <label className='gv-r1-blue-dlor'>$26.00 </label>
  <label className='gv-r1-pink-dollr'>$42.00 </label>
  </div>


</div>



</div>



      
    </div>
  );
}

export default Gv;