import './styles/Men.css'


export const Men = () => {
  return (
    <div className='content'>
    
    <video autoPlay loop muted playsInline >
        <source className="background-video"src="/videos/men.webm" type="video/webm" />
        
      </video>
      <h1>lenin looks</h1>
      <div className='Menposter'>
        <div className='POSTER1'><img src='/images/men/mp1.avif'></img>
        <h5>Rs.999<img src='/images/square.ai'/></h5><div><h3>SUN FADED</h3><h3>SHOP NOW</h3></div>
        </div>
           <div className='POSTER2'><img src='/images/men/mp2.avif'></img>
           <h5>Rs.1999</h5></div> 
        
      </div>
      <h1>helooooo</h1>
    </div>
  )
}
