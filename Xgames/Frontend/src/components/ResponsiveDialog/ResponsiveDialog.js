import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  buttonCard: {
    border: 'none',
    boxShadow: 'none',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    color: '#341cac',
    fontSize: '15px',
    transition: '0.25s',
    display: 'flex',
    alignItems: 'flex-start'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.buttonCard} variant="outlined" color="primary" onClick={handleClickOpen}>
        More Info
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <h1 align="center">{props.title}</h1>
        <img
          src={props.image}
          alt={props.title}
          width="50%"
          height="50%"
          justify = "center"
        />
        <h1> Descripción</h1>
        {props.text}
        <h1>Precios</h1>
      </Dialog>
    </div>
  );
}