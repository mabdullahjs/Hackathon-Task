import IconButton from "@mui/material/IconButton";

function MAIconbutton(props) {
  const { icon, onClick } = props;
  return (
    <>
      <IconButton
        variant="Contained"
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={onClick}
        sx={{ backgroundColor: "#1976d212" }}
      >
        {icon}
      </IconButton>
    </>
  );
}
export default MAIconbutton;