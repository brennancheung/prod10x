import React from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../hooks/useAuth'

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
  }
}))

export const UserAvatarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()

  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const { initialized, user, signOut } = useAuth()
  if (!initialized || !user) return null

  return (
    <>
      <IconButton onClick={handleClick}>
        <img referrerPolicy="no-referrer" src={user.photoURL} className={classes.img} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        variant="selectedMenu"
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 12, horizontal: 'center' }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={signOut}>Log out</MenuItem>
      </Menu>
    </>
  )
}
