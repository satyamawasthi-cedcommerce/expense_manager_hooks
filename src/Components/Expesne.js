import React, { useEffect, useState } from "react";
import "./Expense.css";
export default function Expesne() {
  // state variables to store income, expense and balance
  const [inputInc, setInputInc] = useState();
  const [income, setIncome] = useState(0);
  const [category, setCategory] = useState();
  const [inputExp, setInputExp] = useState();
  const [expense, setExpense] = useState([]);
  const [balance, setBalance] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [editIndex, setEditIndex] = useState();
  // add in come functionality
  var addIncomeFun = () => {
    setIncome(income + Number(inputInc));
  };
  // select category
  var selectCategory = (event) => {
    setCategory(event.target.value);
  };
  // add expense
  var addExp = () => {
    const tempArr = [Number(inputExp), category];
    setExpense([...expense, tempArr]);
  };
  // edit expense
  var editItem = (index1) => {
    document.getElementById("updatebtn").style.display = "block";
    document.getElementById("btnadd").style.display = "none";
    var tempArr2 = [...expense];
    setInputExp(tempArr2[index1][0]);
    setEditIndex(index1);
  };
  // display the edited element
  var displayEdit = (index) => {
    document.getElementById("btnadd").style.display = "block";
    document.getElementById("updatebtn").style.display = "none";
    var flag = inputExp;
    var tempArr2 = [...expense];
    tempArr2[editIndex][0] = flag;
    setExpense([...tempArr2]);
  };
  // delete expenses
  var deleteItem = (index) => {
    var tempArr2 = [...expense];
    if (index !== -1) {
      tempArr2.splice(index, 1);
      setExpense(tempArr2);
    }
  };
  // edit income
  var editIncome = () => {
    document.getElementById("btnupdate2").style.display = "block";
    document.getElementById("btnadd2").style.display = "none";
    var temp = inputInc;
    setIncome(temp);
    console.log(temp);
  };
  // update income
  var updateInc = () => {
    document.getElementById("btnadd2").style.display = "block";
    document.getElementById("btnupdate2").style.display = "none";
    var temp2 = inputInc;
    setIncome(temp2);
  };
  // useeffect
  useEffect(() => {
    var tempexpense = 0;
    expense.map((item) => {
      tempexpense += item[0];
    });
    setTotalExpense(tempexpense);
    setBalance(income - totalExpense);
  }, [expense, income, totalExpense]);
  // returning jsx elements
  return (
    <>
      <div className="containerDiv">
        <div className="topContent">
          <div className="leftTopContent">
            <h4>Good Afternoon,</h4>
            <h3>Satyam Awasthi</h3>
          </div>
          <div className="rightTopContent">
            <h4>
              <i className="fa-regular fa-bell"></i>
            </h4>
          </div>
        </div>
        <div className="expenseandincomeDiv">
          <h4 className="headingIncome">Here are your Expenses and Income.</h4>
          <div className="IncomeAdd">
            <input
              type="text"
              className="inputIncome"
              placeholder="Enter the Income"
              // fetching input
              onChange={(event) => setInputInc(event.target.value)}
            />
            <button id="btnadd2" onClick={addIncomeFun}>
              Add
            </button>
            <button id="btnupdate2" onClick={updateInc}>
              Update
            </button>
            <input
              type="text"
              className="inputExpense"
              placeholder="Enter the Expense"
              value={inputExp}
              onChange={(event) => setInputExp(event.target.value)}
            />
            <button onClick={addExp} id="btnadd">
              Add
            </button>
            <button id="updatebtn" onClick={displayEdit}>
              Update
            </button>
          </div>
          <div className="categoriesdiv">
            <input
              type="radio"
              id="grocery"
              name="expense"
              value="Grocery"
              onChange={selectCategory}
            />
            <label htmlFor="grocery">
              Grocery <i className="fa-solid fa-bag-shopping"></i>
            </label>{" "}
            <br />
            &nbsp;
            <input
              type="radio"
              id="veg"
              name="expense"
              value="veggies"
              onChange={selectCategory}
            />
            <label htmlFor="veg">
              Veggies <i className="fa-solid fa-carrot"></i>
            </label>{" "}
            &nbsp;
            <br />
            <input
              type="radio"
              id="travel"
              name="expense"
              value="Travel"
              onChange={selectCategory}
            />
            <label htmlFor="travel">
              Travel <i className="fa-solid fa-earth-americas"></i>
            </label>{" "}
            <br />
            &nbsp;
            <input
              type="radio"
              id="misc"
              name="expense"
              value="Miscellaneous"
              onChange={selectCategory}
            />
            <label htmlFor="misc">
              Miscellaneous <i className="fa-solid fa-shuffle"></i>
            </label>
          </div>

          <br></br>
          <div className="expenseincomeDiv">
            <div className="balance">
              <h3>
                {" "}
                <i className="fa-solid fa-circle-arrow-down"></i> Income &nbsp;
                <i
                  className="fa-solid fa-pen-to-square"
                  style={{ color: "blue" }}
                  onClick={editIncome}
                ></i>
              </h3>
              <h2>&#8377; {income}</h2>
            </div>
            <div>
              <h3>
                {" "}
                <i className="fa-solid fa-circle-arrow-up"></i> Total Expense
              </h3>
              <h2>&#8377; {totalExpense}</h2>
            </div>
            <div className="expence">
              <h3>
                {" "}
                Balance <i className="fa-solid fa-scale-balanced"></i>
              </h3>
              <h2> &#8377;{balance}</h2>
            </div>
          </div>
        </div>
        <div className="displayDiv">
          <table>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {expense.map((item, index) => (
              <>
                <tr>
                  <td>&#8377;{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "blue" }}
                      onClick={() => editItem(index)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red" }}
                      onClick={() => deleteItem(index)}
                    ></i>
                  </td>
                </tr>
              </>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
