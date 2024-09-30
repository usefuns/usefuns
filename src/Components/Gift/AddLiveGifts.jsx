import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { toast } from "react-toastify";
function AddLiveGifts() {
  const [coin, setCoin] = useState("");
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allCategory, setAllCategory] = useState("");
  const [images, setImages] = useState([]);
  const [images1, setImages1] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/admin/giftCategory/getall`
      );
      const jsonData = await response.json();
      console.log(jsonData.data)
      setAllCategory(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("coin", coin);
    data.append("name", name);
    data.append("category_name", selectedCategory);
    data.append("images", images);
    data.append("images", images1);

    const response = await fetch(
      "https://yoyo560live.live/admin/gift/add",
      {
        method: "POST",
        body: data,
      }
    );

    if (response.ok) {
      const data = await response.json();
      toast.success('Added successfully');
      setCoin("");
      setName("");
      setSelectedCategory("");
      setImages("");
    } else {
      console.log("Error: " + response.status);
    }
  };
  console.log(selectedCategory);
  const handleCancel = () => {
    setCoin("");
    setName("");
    setSelectedCategory("");
    setImages("");
    window.location.reload();
  };

  return (
    <div>
      <div className="Vip_main">
        <h3>Add Live Gift</h3>

        <div className="innerdiv">
          <label htmlFor="">Category List:</label> <br />
          {/* <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Please Select category"
            
          /> */}

          <Select
            className="input"
            //value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.name)}
            placeholder={"Select Lists"}
            options={allCategory}
            classNamePrefix="select2-selection"
            required
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Name</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Title"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Coin*</label> <br />
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Coin"
            onChange={(e) => setCoin(e.target.value)}
          />
        </div>
        <div className="innerdiv">
          <label htmlFor="">Svga*</label> <br />
          <div className="input">
            <input
              type="file"
              name="images"
              id=""
              onChange={(e) => setImages(e.target.files[0])}
            />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Thumbnail*</label> <br />
          <div className="input">
            <input
              type="file"
              name="images"
              id=""
              onChange={(e) => setImages1(e.target.files[0])}
            />
          </div>
        </div>
        {/* <div className="innerdiv">
          <label htmlFor="">Thumbnail* (MP4)</label>
          <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div> */}
        {/* <div className="innerdiv">
          <label htmlFor="">Sound*</label> <br />
          <div className="input">
            <input type="file" name="" id="" />
          </div>
        </div> */}
        <div className="Button_div">
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddLiveGifts;
