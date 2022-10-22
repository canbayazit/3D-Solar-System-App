import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function StickyHeadTable() {
  const { planets } = useSelector((store) => store.planets);
  const cells = [
    {
      id: 1,
      disablePadding: true,
      label: "Planet Name",
      value: "name",
      status: true,
    },
    {
      id: 2,
      disablePadding: false,
      label: "Radius",
      value: "radius",
      status: true,
    },
    {
      id: 3,
      disablePadding: false,
      label: "Axial Tilt",
      value: "axialTilt",
      status: true,
    },
    {
      id: 4,
      disablePadding: false,
      label: "Gravity",
      value: "gravity",
      status: true,
    },
    {
      id: 5,
      numeric: true,
      disablePadding: false,
      label: "Mass",
      value: "mass",
      status: true,
    },
    {
      id: 6,
      numeric: true,
      disablePadding: false,
      label: "Volume",
      value: "volume",
      status: true,
    },
    {
      id: 7,
      numeric: true,
      disablePadding: false,
      label: "Surface Area",
      value: "surfaceArea",
      status: true,
    },
  ];
  const data = planets.slice(); // need new array because of overwriting for sort

  const [value, setValue] = useState("name");
  const [sort, setSortName] = useState(false);
  const [id, setID] = useState();

  const handleClick = (cell) => {
    setValue(cell.value);
    setSortName(!sort);
    setID(cell.id);
  };
  const handleSortValue = (a, b) => {
    console.log("typeof value", typeof value);
    if (
      id > 4
        ? typeof a[value].number === "number"
        : typeof a[value] === "number"
    ) {
      if (sort) {
        console.log("a", a); // a
        console.log("b", b);
        console.log("value", value);
        console.log("a[value]", a[value]);
        console.log("sort", sort);
        return id > 4
          ? parseFloat(a[value].number * 10 ** a[value].exponent).toExponential(
              2
            ) -
              parseFloat(
                b[value].number * 10 ** b[value].exponent
              ).toExponential(2)
          : a[value] - b[value];
      } else if (!sort) {
        return id > 4
          ? parseFloat(b[value].number * 10 ** b[value].exponent).toExponential(
              2
            ) -
              parseFloat(
                a[value].number * 10 ** a[value].exponent
              ).toExponential(2)
          : b[value] - a[value];
      }
    } else if (typeof a[value] === "string") {
      if (sort) {
        return a[value].localeCompare(b[value]);
      } else if (!sort) {
        return b[value].localeCompare(a[value]);
      }
    }
  };

  return (
    <div className={style.container}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 770 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {cells.map((cell) => (
                  <TableCell
                    key={cell.id}
                    align={cell.id === 1 ? "left" : "right"}
                    sx={{
                      backgroundColor: "#1d1f25",
                      color: "white",
                      fontSize: "1.12rem",
                      fontWeight: "600",
                      lineHeight: "1.6rem",
                      width: `${100 / 7}%`,
                      cursor: "pointer",
                    }}
                    onClick={() => handleClick(cell)}
                  >
                    <div
                      className={style.row_container}
                      style={{
                        justifyContent:
                          cell.id === 1 ? "flex-start" : "flex-end",
                      }}
                    >
                      {cell.id>1 ? id === cell.id && sort ? (
                        <ArrowUpwardIcon fontSize="small"/>
                      ) : (
                        <ArrowDownwardIcon fontSize="small"/>
                      ):null}

                      {cell.label}
                      {cell.id===1 ? id === cell.id && sort ? (
                        <ArrowUpwardIcon fontSize="small"/>
                      ) : (
                        <ArrowDownwardIcon fontSize="small"/>
                      ):null}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .sort((a, b) => handleSortValue(a, b))
                .map((item) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                      {cells.map((cell) => {
                        return (
                          <TableCell
                            key={cell.id}
                            style={{ fontSize: "1.1rem" }}
                            align={cell.id === 1 ? "left" : "right"}
                          >
                            {cell.id > 4
                              ? parseFloat(
                                  item[cell.value].number *
                                    10 ** item[cell.value].exponent
                                ).toExponential(2)
                              : item[cell.value]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
