import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const DownloadResumeBtn = () => {
  return (
    <Button
      className="button"
      href="/assets/resume/Shir_Markowitz_Resume.pdf"
      variant="outlined"
      sx={{ borderRadius: 5, color: "black", marginBottom: 3 }}
      download
    >
      Download Resume
      <FileDownloadOutlinedIcon />
    </Button>
  );
};

export default DownloadResumeBtn;
