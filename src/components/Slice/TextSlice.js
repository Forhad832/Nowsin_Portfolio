
export const Textslice = ({text})=>{
   
    let index = 0;
    setInterval(fun,100);
    function fun() {
      text.slice(0,index++);
    }
}
