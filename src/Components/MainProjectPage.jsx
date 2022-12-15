import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import EnhancedTable from "./TableData";
import { useState } from "react";
import data from "./data.json";

function MainProjectPage() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [data,setData]=useState([]);

  // console.log(data);

  return (
    <>
      <span style={{ fontSize: "larger", fontWeight: "bolder" }}>KeyWord:</span>
      <span>shopping in barcelona</span>
      <br />
      <span style={{ fontSize: "larger", fontWeight: "bolder" }}>
        Database: US{" "}
      </span>

      <Box
        style={{ maxWidth: "800px", margin: "auto", marginTop: "50px" }}
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Grid xs={6}>
            <div
              style={{
                width: "95%",
                background: "rgb(242, 243, 255)",
                height: "340px",
                borderRadius: "15px",
                padding: "10px",
              }}
            ></div>
          </Grid>
          <Grid xs={6}>
            <Grid xs={12}>
              <div
                style={{
                  marginBottom: "20px",
                  width: "90%",
                  background: "rgb(242, 243, 255)",
                  height: "100px",
                  borderRadius: "15px",
                  padding: "10px",
                }}
              ></div>
            </Grid>
            <Grid xs={12}>
              <div
                style={{
                  marginBottom: "20px",
                  width: "90%",
                  background: "rgb(242, 243, 255)",
                  height: "100px",
                  borderRadius: "15px",
                  padding: "10px",
                }}
              ></div>
            </Grid>
            <Grid xs={12}>
              <div
                style={{
                  width: "90%",
                  background: "rgb(242, 243, 255)",
                  height: "100px",
                  borderRadius: "15px",
                  padding: "10px",
                }}
              ></div>
            </Grid>
          </Grid>
        </Grid>

        <Box style={{ marginTop: "30px" }} sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Broad Match" />
            <Tab value="two" label="Related" />
            <Tab value="three" label="Questions" />
            <Button
              style={{
                borderRadius: "15px",
                position: "relative",
                marginLeft: "300px",
                background: "purple",
              }}
              variant="contained"
            >
              Add to List
            </Button>
          </Tabs>
        </Box>

        <div style={{marginTop:"25px", marginLeft:"-30px"}}>


              {
                 value=="one" ? <>
                <EnhancedTable STY finaleTableData={data.raw_broadmatch_data}/>
                </> :null
              } 
                            {
                value=="two" ? <>
                <EnhancedTable finaleTableData={data.raw_related_data}/>
                </> :null
              }
                            {
                value=="three" ? <>
                <EnhancedTable finaleTableData={data.raw_question_data}/>
                </> :null
              }
              
        </div>

      </Box>
    </>
  );
}

export default MainProjectPage;
