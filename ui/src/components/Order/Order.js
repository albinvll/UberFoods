import React, { PureComponent } from 'react';
import Navbar from '../Navbar/Navbar';
import './Order.css';

export default class Order extends PureComponent {

    state={
        selectedLocation:[{
            Id: 1,
            KorporataID:11,
            Pershkrimi:'Restaurant Arty',
            AdresaId: 101,
            NrTelefonit: '+38349101101',
            MenuId:12
        },{
            Id: 2,
            KorporataID:22,
            Pershkrimi:'Fast Food Gjenisi',
            AdresaId: 202,
            NrTelefonit: '+38349101102',
            MenuId:24
        }],

        availableArticles: [{
            Id: 1,
            Pershkrimi: "Hamburger double",
            Cmimi: 2.5 ,
        },{
            Id: 2,
            Pershkrimi: "Hamburger pule",
            Cmimi: 2 ,
        },{
            Id: 3,
            Pershkrimi: "Standard Hamburger",
            Cmimi: 1,
        },],
        
        paymentMethod:[{
            Id:1,
            Pershkrimi:'Credit Card'
        }
        ],

        selectedArticles:[]
    }

    
    handleChangeCheckBox=(event)=>{

        /*qetu e qesim metoden qe e kom bo te checkbox input */

    }

    render() {
        return (
            <div>
                {/*<Navbar />*/}
                <section className="order-Main-Section">
                    <div className="order-left-side">
                        <h1 id="order-title">Order Food</h1>
                        <p id="order-desc">Please full fill your informations below :</p>
                        <br />
                        <form action="">
                            Full name
                            <input id="order-input" type="text" />
                            City
                            <input id="order-input" type="text" value="Prishtina" />
                            Restaurant
                            <select id="order-input-selected">
                                {this.state.selectedLocation.map((location, index) => (
                                    <option>{location.Pershkrimi}</option>
                                ))}
                            </select>
                            Payment method
                            <select id="order-input-selected">
                                {this.state.paymentMethod.map((payment, index) => (
                                    <option value="" >{payment.Pershkrimi}</option>
                                ))}
                            </select>

                            <div className="order-checkbox">
                                {this.state.availableArticles.map((food, index) => (
                                    <label id="checkbox-label">
                                        <input onChange={()=>{
                                            var arrayArticles = this.state.selectedArticles;
                                            arrayArticles.push(food);
                                            this.setState({selectedArticles: arrayArticles})
                                            console.log(this.state.selectedArticles);
                                            
                                        }} id="order-checkbox" type="checkbox"/>
                                        {food.Pershkrimi}
                                    </label>
                                ))}
                            </div>
                        </form>
                        
                    </div>

                    <div className="order-right-side">
                        <p id="order-desc">Please full fill your credit card informations below :</p>
                        <form action="">
                            Number
                            <input placeholder="1234 1234 1234" id="order-input" type="number" />
                            Name
                            <input placeholder="John John" id="order-input" type="text" />
                            Date
                            <input placeholder="04/24" id="order-input" type="text" />
                            CVV
                            <input placeholder="123" id="order-input" type="text" />
                        </form>

                        <div className="order-total">
                            <p id="order-desc">Total shuma: {this.state.selectedArticles.map((selectedFood,index)=>(
                                <p>{selectedFood.Cmimi}</p>
                            ))}</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}