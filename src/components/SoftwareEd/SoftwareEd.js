import React from 'react';
import "./SoftwareEd.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function SoftwareEd() {
  return (
    <div className="softwareEd">
      <List className="softwareEd__list">
        <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <ListItemText
            primary="Print Management Software"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className="smallText"
                  color="textPrimary"
                >
                  Ali Conners
                </Typography>
                {" — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <ListItemText
            primary="Healthcare Talk Track for Patient Admissions"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className="smallText"
                  color="textPrimary"
                >
                  Maria Lamba
                </Typography>
                {" — Urna condimentum mattis pellentesque id nibh tortor id aliquet."}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <ListItemText
            primary="Key K-12 Education Processes"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className="smallText"
                  color="textPrimary"
                >
                  Jennifer Stein
                </Typography>
                {" — Id leo in vitae turpis massa sed elementum tempus."}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <ListItemText
            primary="Security Protocols in Software"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className="smallText"
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {" — Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis."}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <ListItemText
            primary="Iot Tech for offices"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className="smallText"
                  color="textPrimary"
                >
                  Scott Farmer
                </Typography>
                {" — Volutpat sed cras ornare arcu. Ultrices vitae auctor eu augue ut lectus arcu bibendum at."}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">

          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <ListItemText
            primary="Romote teams strategies"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className="smallText"
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {" — Tellus integer feugiat scelerisque varius. Leo urna molestie at elementum eu facilisis."}
              </>
            }
          />
        </ListItem>
      </List>
    </div>
  )
}

export default SoftwareEd
