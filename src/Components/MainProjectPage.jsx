import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import EnhancedTable from "./TableData";
import data from "./data.json";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

function MainProjectPage() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [currVolume, setCurrVolume] = React.useState(420);
  const [currDiff, setCurrDiff] = React.useState(46);
  const [curIntent, setCurrIntent] = React.useState(0);
  const [currResult, setCurrResult] = React.useState(87.9);
  const [currCP, serCurrCP] = React.useState(0.24);
  const [currCom, setCurrCom] = React.useState(0.12);
  function getObjectSetData(SV, DF, INT, RSLT, CP, COM) {
    setCurrVolume(SV);
    setCurrDiff(DF);
    setCurrIntent(INT);
    setCurrResult(RSLT);
    serCurrCP(CP);
    setCurrCom(COM);
  }

  const keywordDifficulty = function (value) {
    if (value > 85) {
      return {
        rating: "Very hard",
        text: "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
        color: "#D1002F",
      };
    } else if (value >= 70) {
      return {
        rating: "Hard",
        text: "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
        color: "#FF4953",
      };
    } else if (value >= 50) {
      return {
        rating: "Difficult",
        text: "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
        color: "#FF8C43",
      };
    } else if (value >= 30) {
      return {
        rating: "Possible",
        text: "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
        color: "#FDC23C",
      };
    } else if (value >= 15) {
      return {
        rating: "Easy",
        text: "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
        color: "#59DDAA",
      };
    } else {
      return {
        rating: "Very easy",
        text: "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
        color: "#009F81",
      };
    }
  };

  const intentMap = {
    zero: {
      type: "Commercial",
      hoverText: "The user wants to investigate brands or services.",
      color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
    },
    one: {
      type: "Informational",
      hoverText: "The user wants to find an answer to a specific question.",
      color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
    },
    two: {
      type: "Navigational",
      hoverText: "The user wants to find a specific page or site.",
      color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
    },
    three: {
      type: "Transactional",
      hoverText: "The user wants to complete an action (conversion).",
      color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
    },
  };

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
            >
              <span style={{ fontSize: "large", fontWeight: "300" }}>
                Volume
              </span>{" "}
              <br />
              <span style={{ fontSize: "xx-large", fontWeight: "1000" }}>
                {currVolume}
              </span>
              <Divider />
              <br />
              <span style={{ fontSize: "large", fontWeight: "300" }}>
                KeyWord Difficulty
              </span>
              <br />
              <span style={{ fontSize: "x-large", fontWeight: "800" }}>
                {currDiff}%
              </span>{" "}
              <svg
                style={{ PaddingTop: "10px" }}
                className="CircularProgressbar "
                width={25}
                viewBox="0 0 100 100"
                data-test-id="CircularProgressbar"
              >
                <path
                  className="CircularProgressbar-trail"
                  d="
                    M 50,50
                    m 0,-37.5
                    a 37.5,37.5 0 1 1 0,75
                    a 37.5,37.5 0 1 1 0,-75
                        "
                  strokeWidth={25}
                  fillOpacity={0}
                  style={{
                    strokeDasharray: "235.619px, 235.619px",
                    strokeDashoffset: "0px",
                  }}
                />
                <path
                  className="CircularProgressbar-path"
                  d="
                    M 50,50
                    m 0,-37.5
                    a 37.5,37.5 0 1 1 0,75
                    a 37.5,37.5 0 1 1 0,-75
                        "
                  strokeWidth={25}
                  fillOpacity={0}
                  style={{
                    stroke: keywordDifficulty(currDiff).color,
                    strokeDasharray: "235.619px, 235.619px",
                    strokeDashoffset: "80.1106px",
                  }}
                />
              </svg>
              <br />
              <span style={{ fontSize: "medium", fontWeight: "300" }}>
                {keywordDifficulty(currDiff).rating}
              </span>
              <br />
              <span style={{ fontSize: "medium", fontWeight: "100" }}>
                {keywordDifficulty(currDiff).text}
              </span>
            </div>
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
              >
                <span style={{ fontSize: "large", fontWeight: "300" }}>
                  Intent
                </span>
                <br /> <br />
                <div>
                  {curIntent == 0 ? (
                    <Tooltip title={intentMap.zero.hoverText} placement="top">
                      <span
                        style={{
                          background: intentMap.zero.color.bg,
                          color: intentMap.zero.color.text,
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        {intentMap.zero.type}{" "}
                      </span>
                    </Tooltip>
                  ) : null}
                  {curIntent == 1 ? (
                    <Tooltip title={intentMap.one.hoverText} placement="top">
                      <span
                        style={{
                          background: intentMap.one.color.bg,
                          color: intentMap.one.color.text,
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        {intentMap.one.type}{" "}
                      </span>
                    </Tooltip>
                  ) : null}
                  {curIntent == 2 ? (
                    <Tooltip title={intentMap.two.hoverText} placement="top">
                      <span
                        style={{
                          background: intentMap.two.color.bg,
                          color: intentMap.two.color.text,
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        {intentMap.two.type}{" "}
                      </span>
                    </Tooltip>
                  ) : null}
                  {curIntent >= 3 ? (
                    <Tooltip title={intentMap.three.hoverText} placement="top">
                      <span
                        style={{
                          background: intentMap.three.color.bg,
                          color: intentMap.three.color.text,
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        {intentMap.three.type}{" "}
                      </span>
                    </Tooltip>
                  ) : null}
                </div>
              </div>
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
              >
                <span style={{ fontSize: "large", fontWeight: "300" }}>
                  Results
                </span>{" "}
                <br />
                <span style={{ fontSize: "xx-large", fontWeight: "1000" }}>
                  {currResult + "M"}
                </span>
              </div>
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
              >
                <Grid style={{ display: "flex" }}>
                  <Grid xs={6}>
                    <span style={{ fontSize: "large", fontWeight: "300" }}>
                      CPC
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "xx-large", fontWeight: "1000" }}>
                      {"$" + currCP}
                    </span>
                  </Grid>
                  <Grid xs={6}>
                    <span style={{ fontSize: "large", fontWeight: "300" }}>
                      Com.
                    </span>{" "}
                    <br />
                    <span style={{ fontSize: "xx-large", fontWeight: "1000" }}>
                      {currCom}
                    </span>
                  </Grid>
                </Grid>
              </div>
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

        <div style={{ marginTop: "25px", marginLeft: "-30px" }}>
          {value == "one" ? (
            <>
              <EnhancedTable
                setData={getObjectSetData}
                STY
                finaleTableData={data.raw_broadmatch_data}
              />
            </>
          ) : null}
          {value == "two" ? (
            <>
              <EnhancedTable
                setData={getObjectSetData}
                finaleTableData={data.raw_related_data}
              />
            </>
          ) : null}
          {value == "three" ? (
            <>
              <EnhancedTable
                setData={getObjectSetData}
                finaleTableData={data.raw_question_data}
              />
            </>
          ) : null}
        </div>
      </Box>
    </>
  );
}

export default MainProjectPage;
