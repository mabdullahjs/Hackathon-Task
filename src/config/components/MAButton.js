import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function MAButton(props) {
  const { label, onClick, loading, disabled, variant, color, size, className } = props;
  return (
    <>
      <Button
        disabled={loading || disabled}
        onClick={onClick}
        variant={variant ?? "contained"}
        color={color}
        size={size}
        className={className}
      >
        {loading ? <CircularProgress size={25} /> : label}
      </Button>
    </>
  );
}
export default MAButton;