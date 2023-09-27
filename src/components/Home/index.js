import './index.scss'


function Home() {
 

  return (
    <>
      <div className="container home-page">
     
          
 
        <div class="container">
          <br/>

          <div className='row'>
         
      

                  <div className='col cards'>

                      <div className='' >
                      <p>Last Searched City : <strong>Melbourne</strong></p>
                      <span>
                      20°
                      <img src={"https://openweathermap.org/img/wn/01d@2x.png"}  />
                      </span>
                      </div>

                  </div>
                  <div className='col cards'>

                    <div className='' >
                    <p><strong>Last Quastion From AI:</strong> </p>

                    <p className='q_label'>Who is President of Iran now ?</p>
                    <span className='a_label'>
                      Reiisi i president of iran
                    </span>
                    </div>

                </div>
          </div>
      </div>
       
      </div>
    </>
  )
}

export default Home