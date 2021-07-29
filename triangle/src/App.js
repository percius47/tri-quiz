
import React, { useState } from 'react';
import "./App.css"

const menu=["Questions","Calculator"];

let score=0;

function App() {
const[selectMenu,setSelectMenu]=useState( menu[0]);
var [threeAngles,setThreeAngles]=useState([0,0,0]);
const[thirdAngle,setThirdAngle]=useState(0);
const[hypo,setHypo]=useState([0,0]);
const[scores,setScores]=useState(0);
const[showScore,setShowScore]=useState("none");
const[sideArea,setSideArea]=useState([0,0,0]);


const[res1,setRes1]=useState("");
const[res2,setRes2]=useState("");
const[res3,setRes3]=useState("");
const[res4,setRes4]=useState("");
const[res5,setRes5]=useState("");
const[res6,setRes6]=useState("");
function checkQ1(angles){
  angles[0]=parseInt(angles[0]);
  angles[1]=parseInt(angles[1]);
  angles[2]=parseInt(angles[2]);

  if(angles[0]+angles[1]+angles[2]===180){
    setRes1("Yes, it's a Triangle.");
    score++;
    setScores(score);
  }
  else{
    setRes1("Oops! That's not a triangle!");
  }
}
function checkQ2(angle){
  angle=parseInt(angle);
  if(angle===60)
  {
    setRes2("Yes, that is correct!");
    score++;
    setScores(score);
  }
  else{
    setRes2("No, that is incorrect!");
  }

}
function checkQ3(select){
  if(select==="obtuse")
  {
    setRes3("Yes, that is correct.");
    score++;
    setScores(score);
  }

  else
  setRes3("No, that is incorrect!");
}

function checkQ4(val){
  if(val==="isosceles")
 {
    setRes4("Yes, that is correct!");
    score++;
    setScores(score);
 }

else
  setRes4("No, that is incorrect.");

}

//hypo calc.
function hypoCalc(sides){
sides[0]=parseInt(sides[0]);
sides[1]=parseInt(sides[1]);
var x=Math.sqrt(Math.pow(sides[0],2)+Math.pow(sides[1],2));
setRes5("Hypotenuse: "+x.toFixed(2)+" units");

}
//area calc
function areaCalc(sides){
  var s1=parseInt(sides[0]);
  var s2=parseInt(sides[1]);
  var s3=parseInt(sides[2]);

  var s= (s1+s2+s3)/2
  var area=  Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
  if(isNaN(area)){
    setRes6("Sorry! Cannot make a triangle out of these lengths.");
  }
  else{
    setRes6("Area: "+area.toFixed(2)+" squared units")
  }

}


//body
function setBody(selectedMenu)
{
  if(selectedMenu==="Questions")
  {
    return(
      <ol>
      <div className="questionList">
        <div className="question">
          <li className="qlabel">
            
            Enter 3 angles of a triangle.
          </li>
          <input type="number"
          onChange={(e)=>{
            var angle=e.target.value;
            threeAngles[0]=angle;
            setThreeAngles(threeAngles);
          }

          }
          />
          <input type="number"
          onChange={(e)=>{
            var angle=e.target.value;
            threeAngles[1]=angle;
            setThreeAngles(threeAngles);
          }
          
          }        
          />
          <input type="number"
          onChange={(e)=>{
            var angle=e.target.value;
            threeAngles[2]=angle;
            setThreeAngles(threeAngles);
          }
          
          }
          />
          <button onClick={()=>checkQ1(threeAngles)}>
            Set
          </button>
          <div className="result"
           
          >{res1}</div>
        </div>

        {/* Q2 */}
        <div className="question">
          <li className="qlabel">
           Given the 2 angles of a triangle are,
          </li>
          <ol>
            <li>90 degrees</li>
            <li>30 degrees</li>
          </ol>
          <span className="qprompt">
            Find the third Angle:
          </span>
          <input type="number" 
          onChange={(e)=>{
            var x=e.target.value;
            setThirdAngle(x);
          }}
          />
          <button
          onClick={()=>checkQ2(thirdAngle)}
          >Click</button>
          <div className="result"
        
          >{res2}</div>
          </div>

          {/* Q3 */}
          <div className="question">
          <li className="qlabel">
         The three angles of Triangle are,
          </li>
          <ol>
            <li>120 degrees</li>
            <li>30 degrees</li>
            <li>30 degrees</li>
          </ol>
          <span className="qprompt">
          What category of triangle is this?
          </span>
          <select name="triangle" 
          onChange={(e)=>{
             checkQ3(e.target.value)
          }}
          >
            <option value="acute">Acute-angled Triangle</option>
            <option value="obtuse">Obtuse-angled Triangle</option>
          </select>
          <div className="result"
         
          >{res3}</div>
          </div>

          {/* Q4 */}
          <div className="question">
          <li className="qlabel">
          The three sides of a triangle are,
          </li>
          <ol>
            <li>4 cm</li>
            <li>4 cm</li>
            <li>9 cm</li>
          </ol>
          <span className="qprompt">Which triangle is this?</span>
          <select name="q4" 
          onChange={(e)=>{
            checkQ4(e.target.value)
          }}
          >
            <option value="scalene">Scalene Triangle</option>
            <option value="isosceles">Isosceles Triangle</option>
            <option value="equilateral">Equilateral Triangle</option>
          </select>
          <div className="result"
          
          >{res4}</div>
      </div>
     </div>
     {/* Qlist div */}
     <button 
     className="final"
     onClick={()=>{
       setShowScore("block")
     }}>Show Scores</button>
     <div className="finalResults" style={{display:`${showScore}`}}>Score: {scores}</div>
      </ol>
     

    );
  }//if questions
 if(selectedMenu==="Calculator")
 {
   return(
    <ol>
    <div className="questionList">
      <div className="question">
        <li className="qlabel">
          
          Enter two side lengths of the Triangle.
        </li>
        <input type="number"
        onChange={(e)=>{
          hypo[0]=e.target.value;
          setHypo(hypo);
        }}
        />
         <input type="number"
        onChange={(e)=>{
          hypo[1]=e.target.value;
          setHypo(hypo);
        }}
        />
      <button 
      onClick={()=>{
        hypoCalc(hypo)
      }}
      >Calculate Hypotenuse </button>
    <div className="result">{res5}</div>
</div>

{/* Calc Q2 */}

<div className="questionList">
      <div className="question">
        <li className="qlabel">
          
          Enter three side lengths of the Triangle.
        </li>
        <input type="number" 
        onChange={(e)=>{
          sideArea[0]=e.target.value;
          setSideArea(sideArea);
        }}
        />
        <input type="number"
        onChange={(e)=>
        {
          sideArea[1]=e.target.value;
          setSideArea(sideArea);
        }}
        />
         <input type="number"
        onChange={(e)=>
        {
          sideArea[2]=e.target.value;
          setSideArea(sideArea);
        }}
        />
        <button
        onClick={()=>{
          areaCalc(sideArea)
        }}
        >Calculate Area</button>
        <div className="result">{res6}</div>

        </div>
        </div>
</div>
</ol>

   );

 }

}

  return (
    <div className="App">
      <div className="head">
        <h1>Triangles</h1>
        </div>
        <div className="nav">
        {
          menu.map((item)=>{
            return(
              <h3 key={item}
              
              className="menuItem"
             
              onClick={()=>
                {;
                  setSelectMenu(item)
                }
              }

              >{item}</h3>
            );
          })
        }
      </div>
      <main>{setBody(selectMenu)}</main>

   {/* Footer */}
   <div className="footer">
          <div className="links">
          <a className="linkedIn" href="https://linkedin.com/in/prashantworks47">LinkedIn</a>
          <a className="twitter" href="https://twitter.com/percius25">Twitter</a>
          <a className="twitter" href="https://github.com/percius47">Github</a>
          
           </div>
          <small> Copyright. 2021 </small> 
        </div>
    </div>
   
  )
}

export default App
