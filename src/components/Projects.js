import React, { useState } from 'react'

export default function Projects() {
    const [content,setContent] = useState("soft")
    const [projects,setProjects] = useState(
        [
         {id :"123abc" , name : "projet1" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id: "123bcd" , name : "projet2" ,desciption : "p2 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id : "1232s" , name : "projet3" ,desciption : "p3 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id : "153s" , name : "projet1" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""}
        ]
    ) ;

    const [projects2,setProjects2] = useState(
        [
         {id :"123abc" , name : "asassa" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id: "123bcd" , name : "asasas" ,desciption : "p2 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id : "1232s" , name : "asasas" ,desciption : "p3 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id : "153s" , name : "asasas" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""}
        ]
    ) ;

    const [projects3,setProjects3] = useState(
        [
         {id :"123abc" , name : "aaaa" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id: "123bcd" , name : "dddd" ,desciption : "p2 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id : "1232s" , name : "eezzz" ,desciption : "p3 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""},
         {id : "153s" , name : "eee" ,desciption : "p1 react" , nbHeure : 12  , pic : "ashuhsa.jpg" , link : ""}
        ]
    ) ;

  return (
    <>
    <ul>
        <li><button onClick={()=>setContent("soft")}>Software</button></li>
        <li><button onClick={()=>setContent("des")}>Design</button></li>
        <li><button onClick={()=>setContent("mark")}>Marketing</button></li>
    </ul>
    <div className='d-flex flex-wrap'>
        {
          content === "soft" ? 
          projects && projects.map( item =>  (
            <div key={item.id} className="card" style={{width: '18rem'}}>
            <img src={item.pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.desciption}</p>
              <a href={item.link} className="btn btn-primary">
            Github repo
              </a>
            </div>
          </div>
          
          
        ))
          
          : content === "des" ? 
          
          projects2 && projects2.map( item =>  (
            <div key={item.id} className="card" style={{width: '18rem'}}>
            <img src={item.pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.desciption}</p>
              <a href={item.link} className="btn btn-primary">
            Github repo
              </a>
            </div>
          </div>
          
          
        ))
          
          :
          projects3 && projects3.map( item =>  (
            <div key={item.id} className="card" style={{width: '18rem'}}>
            <img src={item.pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.desciption}</p>
              <a href={item.link} className="btn btn-primary">
            Github repo
              </a>
            </div>
          </div>
          
          
        ))
        }
    </div>
    </>
  )
}
