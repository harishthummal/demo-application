import React from 'react'
import Hoc from '../Hoc'

function Dashboard() {
  const data = [
    {url:"https://via.placeholder.com/350x150", id: 1, name:"img1" },
     {url:"https://picsum.photos/200/300", id: 2, name:"img2" },
     {url:"https://via.placeholder.com/350x150", id: 3, name:"img3" },
     {url:"https://picsum.photos/200/300", id: 4, name:"img4" },
     {url:"https://picsum.photos/200/300", id: 5, name:"img5" },
     {url:"https://picsum.photos/200/300", id: 6, name:"img6" },
     {url:"https://picsum.photos/200/300", id: 7, name:"img7" },
     {url:"https://picsum.photos/200/300", id: 8, name:"img8" },
     {url:"https://picsum.photos/200/300", id: 9, name:"img9" },
     {url:"https://picsum.photos/200/300", id: 10, name:"img10" },
     {url:"https://picsum.photos/200/300", id: 11, name:"img11" },
     {url:"https://via.placeholder.com/350x150", id:12,name:"img12"},
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {
        data.map((item)=>{
          return(
            <img className="w-60 h-60"src={item.url} alt={item.name} key={item.id}/>
          )
        })
      }
      </div>
  );
}

export default Hoc(Dashboard);
