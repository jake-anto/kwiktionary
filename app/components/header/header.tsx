import SearchBar from "@/app/components/header/search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xs" sx={{ p: 2 }}>
        <SearchBar />
      </Container>
    </Box>
  );
}
