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
        }],
        
        paymentMethod:[{
            Id:1,
            Pershkrimi:'Credit Card'
        }
        ],

        selectedArticles:[],

        checkBox: false
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
                                            this.setState({checkBox: !this.state.checkBox})
                                            if(!this.state.checkBox){
                                                var arrayArticles = this.state.selectedArticles;
                                                arrayArticles.push(food.Id);
                                                this.setState({selectedArticles: arrayArticles})
                                                console.log(this.state.selectedArticles);
                                            }
                                        }} id="order-checkbox" type="checkbox"/>
                                        {food.Pershkrimi}
                                    </label>
                                ))}
                            </div>
                        </form>
                        
                    </div>

                    <div className="order-right-side">
                        <form action="">
                            Credit card number
                            <input  id="order-input" type="number" />
                            Credit card name
                            <input  id="order-input" type="text" />
                            Exp date
                            <input placeholder="Exp date" id="order-input" type="text" />
                            CVV
                            <input placeholder="CVV" id="order-input" type="text" />
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}