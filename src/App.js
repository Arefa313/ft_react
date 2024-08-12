import Card from "./Card"
const products=[
    {
        image:"./images/img1.jpg",
        name:"shose",
        description:`This is the first description of the item that we want to sell in the market it is cheap and brand new`
    },
    {
        image:"./images/images.jpg",
        name:"shose2",
        description:`let's see this product it is looking awesome`
    },
    {
        image:"./images/download.jpg",
        name:"shose3",
        description:`This is our last item in the market, hurry and buy it will be out of stock very soon`
    }
]
function App(){
//
    // 
    return(
        <>
            <header>header</header>
            <section>
                <div className="row">
                   {products.map((product,index)=>(<Card key={index} product={product} />))}
                </div>
            </section>
            <footer>footer</footer>


        </>
    )
}
export default App