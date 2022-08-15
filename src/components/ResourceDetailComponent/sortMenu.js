import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { sortData } from "../../components/Redux/Actions/ResourcePageAction";
import SortRounded from "@mui/icons-material/SortRounded";

export default function SortMenu() {
  const dispatch = useDispatch();
  const [select, setSelect] = React.useState(null);
  console.log(select);
  const open = Boolean(select);
  const handleClick = (event) => {
    setSelect(event.currentTarget);
  };
  const handleClose = (by) => {
    setSelect(null);
    dispatch(sortData(by));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SortRounded onClick={handleClick} />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Sort
        </Button>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={select}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("Recently")}>
          Recently Added
        </MenuItem>
        <MenuItem onClick={() => handleClose("ascending")}>Ascending</MenuItem>
        <MenuItem onClick={() => handleClose("descending")}>
          Descending
        </MenuItem>
      </Menu>
    </div>
  );
}
