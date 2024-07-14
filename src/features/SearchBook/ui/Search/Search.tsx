import { InputBase, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useBookStore from "src/app/providers/StoreProvider/config/store";
import { getBook } from "src/shared/api";
import { EndAdornment } from "src/shared/ui";

const StyledSearchInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Search = () => {
  const [searchValue, setSearch] = useState("");
  const setBook = useBookStore((state) => state.setBooks);
  const navigate = useNavigate();
  // need types here for books and add the books to state manager
  //   const [books, setBooks] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleEndAdornment = () => {
    setSearch("");
  };

  const useKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue !== "") {
      setSearch("");
      e.currentTarget.blur();
      getBook(searchValue).then(setBook);
      navigate("/book");
    }
  };

  return (
    <>
      <StyledSearchInput
        value={searchValue}
        onKeyDown={useKeyDown}
        onChange={handleChange}
        placeholder="Search..."
        endAdornment={<EndAdornment onClick={handleEndAdornment} />}
      />
    </>
  );
};
