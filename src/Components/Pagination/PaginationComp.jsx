import React from "react";
import styles from "./PaginationComp.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComp = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
  );
};

export default PaginationComp;
