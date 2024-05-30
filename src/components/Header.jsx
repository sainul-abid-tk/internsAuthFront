import React, { useContext, useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';
import { userRoleResponseContext } from '../ContextAPI/TokenAuth';
function Header() {
  const location = useLocation();
  const {userRoleResponse,setUserRoleResponse}=useContext(userRoleResponseContext)
  const [loginedUser,setLoginedUser]=useState()
  const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
 const [isPageClicked,setIsPageClicked]=useState('products')
 const [anchorEl, setAnchorEl] = useState(null);
  const userOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const handleLogout=()=>{
  toast.success('Log out successfull')
  setTimeout(() => {
  setLoginedUser("")
  setUserRoleResponse("")
  sessionStorage.removeItem('userDetails')
  sessionStorage.removeItem('token')
    navigate('/')
  }, 1400);
}
  useEffect(()=>{
    setLoginedUser(JSON.parse(sessionStorage.getItem("userDetails")))
  },[loginedUser,isPageClicked])
    //  drewer elements
const DrawerList = (
  <div style={{ width: '330px' }}  role="presentation" className='pt-3 px-5 bg-teal-500 h-full ' >
    <div className='flex justify-end '>
    <i class="fa-solid fa-xmark text-3xl text-lime-400 " onClick={toggleDrawer(false)}></i>
    </div>
    <div className='flex flex-col justify-between h-[95%] '>
    <div className='space-y-12 mt-5'>
    <div className='flex justify-center'>
        <div style={{width:'260px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {
              <Avatar
              onClick={handleClick}
              className="cursor-pointer w-28 h-28" 
              src={loginedUser?.password==""?loginedUser?.profilePic:""} style={{ width:"100px", height: '100px' }}/>
            }
            <p className='font-bold text-xl mt-4'>{loginedUser?.username}</p>
            <p className='font-bold '>{loginedUser?.email}</p>
            <p className='text-blue-800  font-bold'>Edit <i class="fa-solid fa-pen"></i></p>
        </div>
      </div>
      <div  className='h-12 flex border-b items-center '>
        <p onClick={()=>{
        navigate('/landing')
        setOpen(false)
      }} className='text-xl font-bold text-lime-400'>Products</p>
      </div>
      <div className='h-12 flex border-b items-center '>
        <p className='text-xl font-bold text-lime-400'>About</p>
      </div>
      <div  className='h-12 flex border-b items-center '>
        <p onClick={()=>{
        navigate('/contact')
        setOpen(false)
      }} className='text-xl font-bold text-lime-400'>Contact</p>
      </div>
      <div className='h-12 flex border-b items-center '>
        <p className='text-xl font-bold text-lime-400'><i class="fa-solid fa-cart-shopping text-lime-400 text-xl"></i>Cart</p>
      </div>
    </div>
    <p onClick={handleLogout} className='text-red-600 text-xl font-bold cursor-pointer '><i class="fa-solid fa-right-from-bracket "></i> Logout</p>

    </div>
  </div>
);
const headerLandingColor="flex justify-between px-12 max-[720px]:px-3 h-14 items-center text-white  bg-gradient-to-r from-teal-900 to-teal-700 ..."
  return (
    
    <>
        {/* Header */}
     <div className={location.pathname!=='/landing'?'flex justify-between px-12 max-[720px]:px-3 h-14 items-center':headerLandingColor}>
     <h3 onClick={()=>navigate('/landing')} className='text-2xl font-semibold text-lime-400 cursor-pointer'>D'Watch</h3>
     {/* large screen */}
     <div className='flex justify-between space-x-16 max-[720px]:hidden'>
      <div>
      <p onClick={()=>{
        setIsPageClicked('products')
        navigate('/landing')
      }} className='text-lg cursor-pointer'>Products</p>
      <div className={isPageClicked=='products'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div>
      <p onClick={()=>{setIsPageClicked('about')}} className='text-lg cursor-pointer'>About</p>
      <div className={isPageClicked=='about'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div>
      <p onClick={()=>{
        setIsPageClicked('contact')
        navigate('/contact')
      }} className='text-lg cursor-pointer'>Contact</p>
      <div className={isPageClicked=='contact'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div>
      <p onClick={()=>{setIsPageClicked('cart')}} className='text-lg cursor-pointer'><i class="fa-solid fa-cart-shopping text-lime-400 text-xl"></i></p>
      <div className={isPageClicked=='cart'&&'h-1 bg-lime-400 w-full rounded-lg'}></div>
      </div>
      <div className='flex  space-x-5 max-[598px]:float-end max-[598px]:mb-3'>
         {JSON.parse(sessionStorage.getItem("userDetails"))?.role=="user"&&<Tooltip title="Account settings">
        <Avatar
             onClick={handleClick}
             className="cursor-pointer"
             src={loginedUser?.password==""?loginedUser?.profilePic:""} sx={{ width: 30, height: 30 }}/>
        </Tooltip>}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={userOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem style={{background:'white',width:'270px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {
              <Avatar
              onClick={handleClick}
              className="cursor-pointer w-28 h-28" 
              src={loginedUser?.password==""?loginedUser?.profilePic:""} style={{ width:"112px", height: '112px' }}/>
            }
            <p className='font-bold text-lg mt-4'>{loginedUser?.username}</p>
            <p className='font-bold '>{loginedUser?.email}</p>
            <p className='text-blue-800  font-bold'>Edit <i class="fa-solid fa-pen"></i></p>
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{
          navigate('/help')
        }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Help
        </MenuItem>
        <MenuItem  onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </div>
     </div>
     <div className='hidden max-[720px]:block'>
     <i onClick={toggleDrawer(true)} class="fa-solid fa-bars text-lime-400 text-2xl"></i>
      <Drawer  anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    </div>
    </>   
  )
}

export default Header