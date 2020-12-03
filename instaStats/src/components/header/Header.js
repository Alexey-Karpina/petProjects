import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import GetAppIcon from "@material-ui/icons/GetApp";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import LocalPhoneRoundedIcon from "@material-ui/icons/LocalPhoneRounded";
import ReorderRoundedIcon from "@material-ui/icons/ReorderRounded";
import LanguageIcon from "@material-ui/icons/Language";
import BeenhereIcon from "@material-ui/icons/Beenhere";

import noAvatar from "../../images/no-avatar.png";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import bgImg from "../../images/forestbridge.jpg";

// import Home from "../pages/home/Home";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  homeBtn: {
    marginRight: "50px",
  },
  card: {
    maxWidth: 345,
  },
  skillTitle: {
    display: "flex",
    alignItems: "center",
  },
  titleIcon: {
    marginRight: "25px",
  },
  container: {
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: "350px 350px 350px 350px",
    boxShadow: "0px 0px 5px 0px rgba(50, 50, 50, 1)",
  },
  skillsItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  skillEnglish: {
    width: "60%",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: "350px 350px 350px 350px",
  },
  skillUkrainian: {
    width: "100%",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: "350px 350px 350px 350px",
  },
  skillRussian: {
    width: "100%",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#2196F3",
    borderRadius: "350px 350px 350px 350px",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" className={classes.homeBtn}>
            <HomeRoundedIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/cv">
            <ListItem button key="CV">
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary="Curriculum Vitae" />
            </ListItem>
          </Link>

          <ListItem button key="Downolad">
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Download CV" />
          </ListItem>

          <ListItem button key="Mail">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Send email" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={noAvatar}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Alexey Karpina
              </Typography>
              <hr />
              <List>
                <ListItem key="Specialty">
                  <ListItemIcon>
                    <WorkOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Front-End Developer" />
                </ListItem>
                <ListItem key="Home">
                  <ListItemIcon>
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kyiv, Ukraine" />
                </ListItem>
                <ListItem key="Mail">
                  <ListItemIcon>
                    <MailOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="alexey.karpina@gmail.com" />
                </ListItem>
                <ListItem key="Phone">
                  <ListItemIcon>
                    <LocalPhoneRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="+380990154102" />
                </ListItem>
              </List>
              <hr />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.skillTitle}
              >
                <ReorderRoundedIcon
                  fontSize="large"
                  className={classes.titleIcon}
                />{" "}
                Skills
              </Typography>
              <List className>
                <ListItem key="html">
                  <ListItemIcon>
                    <BeenhereIcon />
                  </ListItemIcon>
                  <ListItemText primary="HTML5" />
                </ListItem>
                <ListItem key="css">
                  <ListItemIcon>
                    <BeenhereIcon />
                  </ListItemIcon>
                  <ListItemText primary="CSS3" />
                </ListItem>
                <ListItem key="javascript">
                  <ListItemIcon>
                    <BeenhereIcon />
                  </ListItemIcon>
                  <ListItemText primary="JS" />
                </ListItem>
              </List>
              <hr />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.skillTitle}
              >
                <LanguageIcon fontSize="large" className={classes.titleIcon} />{" "}
                Languages
              </Typography>
              <List>
                <ListItem key="eng" className={classes.skillsItem}>
                  <ListItemText primary="English" />
                  <div className={classes.container}>
                    <div className={classes.skillEnglish}>60%</div>
                  </div>
                </ListItem>
                <ListItem key="ukr" className={classes.skillsItem}>
                  <ListItemText primary="Ukrainian" />
                  <div className={classes.container}>
                    <div className={classes.skillUkrainian}>100%</div>
                  </div>
                </ListItem>
                <ListItem key="rus" className={classes.skillsItem}>
                  <ListItemText primary="Russian" />
                  <div className={classes.container}>
                    <div className={classes.skillRussian}>100%</div>
                  </div>
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
      </main>
    </div>
  );
}
