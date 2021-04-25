import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css';
import {FaPhone, FaFlag, FaEnvelope} from 'react-icons/fa';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
  
    }

    componentDidMount() {
      fetch("https://randomuser.me/api/?results=20")
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({ items: result.results})
                  console.log(result)
              },
              (error) => {
                  console.log(error)
              }
          )
    }
  
    render() {
        return (
            <>
                {this.state.items.map((item, idx)=> (
                    <div key={idx} className="col-md-6 col-lg-4">
                        <div className="card-box">
                            <div className="card-thumbnail">
                                <img src={item.picture.thumbnail} className="img-thumbnail" alt=""/>
                            </div>
                            <h3 style={{textAlign: "center"}}><a href={idx} className="mt-2 text-primary">{item.name.first} {item.name.last}</a></h3>
                            <p className="text-secondary"> <FaPhone/>  {item.phone} </p>
                            <p className="text-secondary"> <FaEnvelope/> {item.email}</p>
                            <p className="text-secondary"> <FaFlag/> {item.location.country}</p>
                        </div>
                    </div>
                ))}
           
            </>
        );
    }
}

export default Users;