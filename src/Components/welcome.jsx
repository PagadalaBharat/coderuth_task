import { Component } from "react";
import "./WelcomeStyle.css"
class Welcome extends Component {
  state = {
    products: [],
    loading: true,
    error: null
  };
  
  componentDidMount(){
    this.FetchData()
  }
  FetchData= async ()=>{
      
      this.setState({
          loading:true
        })
        try{
        const response= await fetch("https://fakestoreapi.com/products")
        const data= await response.json()
        console.log(data)
        this.setState({
            products: data,
            loading: false
        })
    }catch(error){
        console.log("error from catch file",error)
        
        this.setState({
            
            error: error,
            loading: false
        })

        
    }finally{
        this.setState({
            loading: false
        })
    }

  }
  render() {
    return (
      <div >
        <h1 style={{textAlign:"center"}}>welcome</h1>
        <div className="productcontainer">
            {
             this.state.loading ? <h1 style={{textAlign:"center"}}>Loading....</h1> :
             this.state.products.map(products=>{
                return(
                 
                    

                    <div key={products.id} className="product">
                        <img src={products.image} alt={products.title} />
                        <h1>{products.title}</h1>
                        <h3>{products.price}</h3>
                    </div>
                    
                  
                )
             })
            
                
            
            }
        </div>

      </div>
    );
  }
}
export default Welcome;
