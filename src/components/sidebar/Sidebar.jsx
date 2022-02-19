
import './sidebar.css'
import { LineStyle,Timeline,UsbSharp,Home,Message,SupervisedUserCircle,Assistant,Assessment,
  AccountBalance,Person,Category,Report,Receipt,MailSharp,DoneAllOutlined} from '@material-ui/icons';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>

      </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Home className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Receipt className='sidebarIcon' />
              Sales
            </li>
          </ul>
      </div>
      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              < Person className='sidebarIcon'/>
             Users 
            </li>
            <li className="sidebarListItem">
              <Category className='sidebarIcon' />
             Products
            </li>
            <li className="sidebarListItem">
              <AccountBalance className='sidebarIcon'/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <Assessment className='sidebarIcon'/>
              Reports
            </li>
          </ul>
      </div>
      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailSharp className='sidebarIcon'/>
              Mail
            </li>
            <li className="sidebarListItem">
              <Assistant className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className='sidebarIcon'/>
              Message
            </li>
          </ul>
      </div>
      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <SupervisedUserCircle className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <DoneAllOutlined className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              < Report className='sidebarIcon'/>
              Reports
            </li>
          </ul>
      </div>
    </div>
  )
}
