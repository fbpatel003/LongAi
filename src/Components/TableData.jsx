import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
// import Tooltip from '@mui/material/Tooltip';
// import Tooltip from '@material-ui/core/Tooltip';

// import data from "./data.json";

function createData(
  Keyword,
  SearchVolume,
  Intent,
  CPC,
  Competition,
  Results,
  KeywordDifficulty
) {
  Results = Results / 1000000;
  return {
    Keyword,
    SearchVolume,
    Intent,
    CPC,
    Competition,
    Results,
    KeywordDifficulty,
  };
}

// const FinaleTableData = data.raw_broadmatch_data;

// let rows = [];

// FinaleTableData.forEach(element => {
//   element = createData(element[0], element[1],element[2], element[3],element[4],element[5],element[7],);
//   rows = [element, ...rows];
// });

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Keyword",
    numeric: false,
    disablePadding: true,
    label: "Keyword",
  },
  {
    id: "Intent",
    numeric: true,
    disablePadding: false,
    label: "Intent",
  },
  {
    id: "SearchVolume",
    numeric: true,
    disablePadding: false,
    label: "Search Volume",
  },

  {
    id: "CPC",
    numeric: true,
    disablePadding: false,
    label: "CPC",
  },
  {
    id: "Competition",
    numeric: true,
    disablePadding: false,
    label: "Com.",
  },
  {
    id: "Results",
    numeric: true,
    disablePadding: false,
    label: "Results",
  },
  {
    id: "KeywordsDifficulty",
    numeric: true,
    disablePadding: false,
    label: "Keyword Difficulty",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
  console.log(props.finaleTableData);

  let rows = [];

  props.finaleTableData.forEach((element) => {
    element = createData(
      element[0],
      element[1],
      element[2],
      element[3],
      element[4],
      element[5],
      element[7]
    );
    rows = [element, ...rows];
  });

  const intentMap = {
    0: {
      type: "Commercial",
      hoverText: "The user wants to investigate brands or services.",
      color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
    },
    1: {
      type: "Informational",
      hoverText: "The user wants to find an answer to a specific question.",
      color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
    },
    2: {
      type: "Navigational",
      hoverText: "The user wants to find a specific page or site.",
      color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
    },
    3: {
      type: "Transactional",
      hoverText: "The user wants to complete an action (conversion).",
      color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
    },
  };

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

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("SearchVolume");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.Keyword);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Keyword, SV, DF, INT, RSLT, CP, COM) => {
    const selectedIndex = selected.indexOf(Keyword);
    props.setData(SV, DF, INT, RSLT, CP, COM);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Keyword);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (Keyword) => selected.indexOf(Keyword) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Keyword);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) =>
                        handleClick(
                          event,
                          row.Keyword,
                          row.SearchVolume,
                          row.KeywordDifficulty,
                          row.Intent,
                          row.Results,
                          row.CPC,
                          row.Competition
                        )
                      }
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Keyword}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Keyword}
                      </TableCell>
                      <TableCell align="right">
                        {row.Intent == 0 ? (
                          <Tooltip
                            title={intentMap[0].hoverText}
                            placement="top"
                          >
                            <span
                              style={{
                                padding: "7px",
                                background: intentMap[0].color.bg,
                                color: intentMap[0].color.text,
                              }}
                            >
                              {intentMap[0].type.charAt(0)}
                            </span>
                          </Tooltip>
                        ) : null}
                        {row.Intent == 1 ? (
                          <Tooltip
                            title={intentMap[1].hoverText}
                            placement="top"
                          >
                            <span
                              style={{
                                padding: "7px",
                                background: intentMap[1].color.bg,
                                color: intentMap[1].color.text,
                              }}
                            >
                              {intentMap[1].type.charAt(0)}
                            </span>
                          </Tooltip>
                        ) : null}
                        {row.Intent == 2 ? (
                          <Tooltip
                            title={intentMap[2].hoverText}
                            placement="top"
                          >
                            <span
                              Tooltip={intentMap[2].hoverText}
                              style={{
                                padding: "7px",
                                background: intentMap[2].color.bg,
                                color: intentMap[2].color.text,
                              }}
                            >
                              {intentMap[2].type.charAt(0)}
                            </span>
                          </Tooltip>
                        ) : null}
                        {row.Intent >= 3 ? (
                          <Tooltip
                            title={intentMap[3].hoverText}
                            placement="top"
                          >
                            <span
                              Tooltip={intentMap[3].hoverText}
                              style={{
                                padding: "7px",
                                background: intentMap[3].color.bg,
                                color: intentMap[3].color.text,
                              }}
                            >
                              {intentMap[3].type.charAt(0)}
                            </span>
                          </Tooltip>
                        ) : null}{" "}
                      </TableCell>
                      <TableCell align="right">{row.SearchVolume}</TableCell>
                      <TableCell align="right">{row.CPC}</TableCell>
                      <TableCell align="right">{row.Competition}</TableCell>
                      <TableCell align="right">{row.Results}</TableCell>
                      <TableCell align="right">
                        {row.KeywordDifficulty}
                        <span
                          style={{
                            height: "10px",
                            width: "20px",
                            borderRadius: "50%",
                            background: keywordDifficulty(row.KeywordDifficulty)
                              .color,
                          }}
                        >
                          {" "}
                          &nbsp; &nbsp;
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
