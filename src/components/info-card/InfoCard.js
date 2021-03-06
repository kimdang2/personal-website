import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import profile from '../../data/profile';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        return (
            <div>
                <Grid container className={styles.infoGrid} justify="center" alignItems="center">
                    <Grid item>
                        <Avatar alt={profile.Name} className={styles.bigAvatar} src={require("../../img/kim.jpeg")} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={styles.name}>
                            {profile.Name}
                        </Typography>
                        <Typography variant="h5" className={styles.position}>
                            {profile.Position}
                        </Typography>
                        <Typography variant="h6" className={styles.introduction}>
                        {profile.Description}
                        </Typography>
                    </Grid>
                    <Divider className={styles.divider} variant="middle" />
                    <Grid item xs={12}>
                        <List className={styles.infoList}>
                            <ListItem>
                                <Avatar className={styles.infoIcon}>
                                    <LocationCityIcon />
                                </Avatar>
                                <ListItemText primary={profile.Address}/>
                            </ListItem>

                            <ListItem>
                                <Avatar className={styles.infoIcon}>
                                    <MailOutlineIcon />
                                </Avatar>
                                <ListItemText primary={profile.Email}/>
                            </ListItem>

                            <ListItem>
                                <ListItemText><a href="https://github.com/kimdang2">GitHub</a></ListItemText>
                                <ListItemText><a href="https://www.linkedin.com/in/kimdang229/">LinkedIn</a></ListItemText>

                            </ListItem>

                        </List>
                    </Grid>
                    <Divider className={styles.divider} variant="middle" />
                </Grid>
            </div>
        );
    }
}

export default InfoCard;
