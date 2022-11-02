import React from "react";

const Card = () =>{
    return(
        <div className="row row-cols-1 row-cols-md-4 g-2" style ={{marginTop:"20px"}}>
            <div className="col">
                <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer card text-center">
                <a href="#" class="btn btn-primary">Find Out More</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer card text-center">
                <a href="#" class="btn btn-primary">Find Out More</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer card text-center">
                <a href="#" class="btn btn-primary">Find Out More</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer card text-center">
                <a href="#" class="btn btn-primary">Find Out More</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;