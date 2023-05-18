import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../data/data';
import './AddMovie.css';

const AddReceipt = () => {
    let navigate = useNavigate();

    const [company, setCompany] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [date, setDate] = useState("");

    const companyHandler = (event) => {
        setCompany(event.target.value);
    }

    const totalAmountHandler = (event) => {
        setTotalAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const addReceiptHandler = (event) => {
        // Modify this logic to add the receipt data to the desired storage or state
        data.push({
            company: company,
            totalAmount: totalAmount,
            date: date
        });
        navigate("/Catalog", { replace: true });
    }

    return (
        <div className="form">
            <h1 className="title">Add Receipt</h1>
            <label>Company</label>
            <input onChange={companyHandler}></input>
            <label>Total Amount</label>
            <input onChange={totalAmountHandler}></input>
            <label>Date</label>
            <input onChange={dateHandler}></input>
            <button onClick={addReceiptHandler}>Add Receipt</button>
        </div>
    );
}

export default AddReceipt;