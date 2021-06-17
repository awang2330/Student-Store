import './Home.css'
import StoreProducts from '../StoreProducts/StoreProducts'
import codepath from '../imgs/codepath.svg'

export default function Home( {products} ) {
  return (
    <div id="home" className="Home">
      <div className="shop-intro">
        {/* <div className="college-name">College of Codepath</div> */}
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          <p>
            We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. 
            Checkout whenever you're ready.
          </p>
        </div>
      </div>

      <div id="about">
        <h1>About</h1>
        <div className="about">
          <div class="text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div class="media">
            <img src={codepath} alt="codepath large"/>
          </div>
        </div>
      </div>

      <div id="store">
        <h1>Store</h1>
        <StoreProducts products={products}/>
      </div>
      
      <div id="contact">
        <h1>Contact</h1>
        <div className="contact">
          <div class="summary">
            <ul class="info">
              <li><span>Email:</span> code@path.org</li>
              <li><span>Phone:</span> 1-800-CODEPATH</li>
              <li><span>Address:</span> 123 Fake Street, San Francisco, CA</li>
              <li><span>Socials: </span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
  )
}