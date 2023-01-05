import Button from '@mui/material/Button';

const Buttons = (props) => {
    const {github,demo} = props;

    return (
        <div className="buttons">
            <a className="link" href={github} target="_blank"><Button className="button" variant="outlined" sx={{borderRadius: 5, margin: 1}}>Github</Button></a>
            <a className="link" href={demo} target="_blank"><Button className="button" variant="outlined" sx={{borderRadius: 5}}>Demo</Button></a>
        </div>
    )
}

export default Buttons;
