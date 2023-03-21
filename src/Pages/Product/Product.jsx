import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, Legend, Tooltip } from "recharts";
import { salesData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
const Product = () => {
 

  return (
    <div className="Product">
      <div className="userTitleContainer">
        <h1 className="userTitle">𝐏𝐫𝐨𝐝𝐮𝐜𝐭</h1>
        <Link to={"/newProduct"}>
          <button className="userAddButton">𝐂𝐫𝐞𝐚𝐭𝐞</button>
        </Link>
      </div>
      <div className="productInformation">
        <div className="salesInfo">
          <div className="salesTitle">Sales Performance (Last 3 months)</div>

          <LineChart width={400} height={150} data={salesData}>
            <XAxis dataKey="name"/>
            <Legend />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="productInfo">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">1231</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productUpdate">
            <form className="productForm" >
            <div className="productFormLeft">
                  <label style={{fontWeight:"bold"}}>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
                
            </form>
        
        </div>
    </div>
  );
};

export default Product;
