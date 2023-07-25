import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Menu from "../components/Menu.jsx";

const Single = () => {
    return ( 
        <div className="single">
          <div className="content">
             <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
             <div className="user">
                 <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
             <div className="info">
                <span>jhon</span>
                <span>Posted 2 days ago</span>
             </div>
             <div className="edit">
                <Link to={`/write?edit=2`}>
                    <img  src={Edit}/>
                    </Link>
                <Link>
                    <img src={Delete}/>
                </Link>
             </div>
             </div>
             <div>
                <h1>There are many variations of passages of Lorem Ipsum available</h1>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
             </div>
           </div>
           <div className="menu">
            <Menu />
           </div>
        </div>
);
}
export default Single;