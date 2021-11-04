import Button from './components/Button/Button'
import Card from './components/Card/Card'
import buttonData from "./data/buttonsData";
import shopItems from "./data/shopItemsData";
function App() {


  return (
    <div className="container">
        <div className="row center-xs">
            <div className="col-xs-6">
                <h1 className="heading1">
                    our
                    <strong className="heading1__banner">Store</strong>
                </h1>
            </div>
        </div>
        <div className="row center-xs">
            <div className="col-xs-6 ">
                <div className="button-wrapper">
                    {
                        buttonData.map((button) =>{
                        return <Button
                            className="button"
                            buttonName={button.name}
                            clickHundler={button.clickHundler}
                        />
                    })}
                </div>
            </div>
        </div>
        <div className="row center-xs">
            {
                shopItems.map((item) => {
                    return <Card image={item.imgSrc} title={item.title} price={item.price} />
                })
            }
        </div>
    </div>
  );
}

export default App;
