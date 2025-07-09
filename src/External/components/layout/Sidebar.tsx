import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="w-64">
       <List>
        <ListItem>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </ListItem>
       </List>

    </Drawer>
  )
}
