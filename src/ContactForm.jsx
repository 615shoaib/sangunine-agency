export default function ContactForm(){

  return(
  <>
  <div class="container container-contactus">
  <div class="row ">
    <div class="col-lg-6">
      <div class="contat-form-heading">
        <h2>What can we <br /> do for you? <br /> Get In touch</h2>
      </div>
    </div>
    <div class="col-lg-6 -ms-12">
      <form class="form-inline">
        <div class="form-group  mx-sm-3 mb-2">
          <input name="name" type="text" class="form-control feedback-input" placeholder="Name" />
        </div>
        <div class="form-group    mx-sm-3 mb-2">
          <input name="email" type="email" class="form-control feedback-input" placeholder="Email" />
        </div>
        <div class="form-group  mx-sm-3 mb-2">
          <textarea name="text" class="form-control feedback-input" placeholder="Comment"></textarea>
        </div>
        <button type="submit" class="btn  mx-sm-3 btn-primary mb-2" style={{width:'92%'}}>SUBMIT</button>
      </form>
    </div>
  </div>
</div>


 
  </>
)
 

}