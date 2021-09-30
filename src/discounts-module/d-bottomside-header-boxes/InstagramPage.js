import React from 'react'
import {Jumbotron} from 'reactstrap'

export const StoreNumberBanner = ()=>{
  return (
    <div>
      <Jumbotron>
        <h1 className="display-2" style ={{color: 'blue'}}>Store 1</h1>
        <hr className="my-4" />
      </Jumbotron>
    </div>
  );
  


}