import { useState, useEffect} from "react";
import { Footer, Header, CustomerTableRow } from "../components";
import {getAllCustomers } from '../services/customerService';
import { Customer, Plan } from "../types";
import './Page.css';

export function Customers(){
    const [customers, setCustomers] = useState({});
    
    const getJSON = async () => {
        const resp = await fetch("https://localhost:5001/api/Customer");
        var data = await resp.json();
        setCustomers(data);
    };
    
    useEffect(() => {
        getJSON();
    }, []);

    var j = JSON.stringify(customers);
    var parsedCustomers = JSON.parse(j);
    console.log(parsedCustomers[3]);

    return (
        <>
        <Header />
        <div className = "container">
            <h2 className="centerText">Customers</h2>
            <table className = 'table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Plans</th>
                    </tr>
                </thead>
            <tbody>
                
            </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}