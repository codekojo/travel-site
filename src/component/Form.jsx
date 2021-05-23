import React from 'react';

export default function FormContact(){
   return (
      <form className="container p-0 m-3 form--wrapper">
      <h2 className="text-center p-4">Stay Updated</h2>
      <div class="form-group row">
    
    <label for="name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="name" required/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail"/>
    </div>
  </div>
  <button type="submit" class="btn btn--footer btn-primary w-100">Submit</button>
</form>
   )
}